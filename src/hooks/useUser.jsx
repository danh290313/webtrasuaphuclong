import {
  getAllUser as getAllUserService,
  deleteUser as deleteUserService,
  addUser as addUserService,
  getUser as getUserService,
  editUser as editUserService,
} from "@/services/userApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useUser() {
  const nav = useNavigate();
  // const { token } = useAuth();
  // const [staffs, setStaffs] = useState([]);
  // const [positions, setPositions] = useState([]);
  const getUser = async (id) => await getUserService(id, token);
  const editUser = async (id, value) => {
    const res = await editUserService(id, value, token);
    if (res.data.status === "success") {
      toastSuccess(res.data.msg);
      nav("/dashboard/staff");
    } else toastError(res.data.msg);
  };
  const { token } = useAuth();
  const getAllUser = async () => {
    const { data } = await getAllUserService(token);
    if (data?.status === "success") return data;
    else {
      toastError(data?.msg);
      return data;
    }
  };
  const deleteUser = async (id) => {
    const { data } = await deleteUserService(id, token);
    if (data?.status === "success") {
      toastSuccess(data?.msg);
      return data;
    } else {
      toastError(data?.msg);
      return data;
    }
  };
  const addUser = async (value) => {
    const { data } = await addUserService(value, token);
    if (data?.status === "success") {
      toastSuccess(data?.msg);
      return data;
    } else {
      toastError(data?.msg);
      return data;
    }
  };
  return {
    getAllUser,
    deleteUser,
    addUser,
    getUser,
    editUser,
  };
}

export default useUser;
