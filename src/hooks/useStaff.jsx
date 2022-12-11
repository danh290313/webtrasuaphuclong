import {
  getAllPositions,
  getStaffs as getStaffsServices,
  getStaff as getStaffServices,
  editStaff as editStaffServices,
  deleteStaff as deleteStaffServices,
  resetPassStaff as resetPassStaffServices,
  addStaff as addStaffServices,
} from "@/services/staffApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useStaff() {
  const nav = useNavigate();
  const { token } = useAuth();
  const [staffs, setStaffs] = useState([]);
  const [positions, setPositions] = useState([]);
  const getStaff = async (id) => await getStaffServices(id, token);
  const editStaff = async (id, value) => {
    const res = await editStaffServices(id, value, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const resetPassStaff = async (id) => {
    const res = await resetPassStaffServices(id, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const deleteStaff = async (id) => {
    const res = await deleteStaffServices(id, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const addStaff = async (val) => {
    const res = await addStaffServices(val, token);
    if (res.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/staff");
    } else toastError(res.msg);
  };
  useEffect(() => {
    const contr = new AbortController();
    const { signal } = contr;
    console.log({ token });
    try {
      (async () => {
        const res = await getStaffsServices(signal, token);
        setStaffs(res);
      })();
    } catch (err) {
      console.log(err);
    }

    (async () => {
      const res = await getAllPositions(signal, token);
      setPositions(res?.positions);
    })();

    return () => contr.abort();
  }, [token]);
  return {
    staffs,
    positions,
    getStaff,
    editStaff,
    deleteStaff,
    resetPassStaff,
    addStaff,
  };
}

export default useStaff;
