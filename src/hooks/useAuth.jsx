import { logoutUser } from "@/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { post } from "@/utils/request";
import { login as loginService } from "@/services/authencation";
import { loginSuccess, loginStart, loginFail } from "@/redux/authSlice";
import { toast } from "react-toastify";
import { toastError, toastSuccess } from "@/utils/toast";
function useAuth() {
  const { currentUser, loading, error } = useSelector((state) => state.auth);
  const token = currentUser.token;
  const dispatch = useDispatch();
  // const login = (email, password) => dispatch(loginUser(email, password));
  const login = async (email, password) => {
    try {
      dispatch(loginStart());
      const abortController = new AbortController();
      const { signal } = abortController;
      const { data } = await loginService(email, password, signal);
      if (data.status === "error" || data.status === "fail") {
        toastError(data.msg);
        return dispatch(loginFail(data));
      } else {
        toastSuccess("Login success");
        return dispatch(loginSuccess(data));
      }
    } catch (err) {
      console.log(err);
      if (err?.response?.data?.message) {
        toastError(err.response.data.message);
        return dispatch(loginFail(err.response.data.message));
      } else {
        toastError(err.message);
        return dispatch(loginFail(err.message));
      }
    }
  };
  const logout = () => dispatch(logoutUser());
  return {
    currentUser,
    loading,
    error,
    login,
    logout,
    token,
  };
}

export default useAuth;
