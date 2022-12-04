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
  const editStaff = async (value) => {
    const res = await editStaffServices(value, token);
    res.data.status === "success"
      ? toastSuccess(res.data.msg)
      : toastError(res.data.msg);
  };
  const resetPassStaff = async (id) => {
    const res = await resetPassStaffServices(id, token);
    res.data.status === "success"
      ? toastSuccess(res.data.msg)
      : toastError(res.data.msg);
  };
  const deleteStaff = async (id) => {
    const res = await deleteStaffServices(id, token);
    res.data.status === "success"
      ? toastSuccess(res.data.msg)
      : toastError(res.data.msg);
  };
  const addStaff = async (val) => {
    const res = await addStaffServices(val, token);
    if (res.data.status === "success") {
      toastSuccess(res.data.msg);
      nav("/dashboard/staff");
    } else toastError(res.data.msg);
  };
  useEffect(() => {
    const contr = new AbortController();
    const { signal } = contr;
    (async () => {
      const res = await getStaffsServices(signal, token);
      setStaffs(res.data);
    })();
    (async () => {
      const res = await getAllPositions(signal, token);
      setPositions(res?.data?.positions);
    })();

    return () => contr.abort();
  }, []);
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
