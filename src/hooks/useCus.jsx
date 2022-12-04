import {
  getAllCus as getAllCusService,
  deleteCus as deleteCusService,
  addCus as addCusService,
  getCus as getCusService,
  editCus as editCusService,
} from "@/services/customerApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useCus() {
  const nav = useNavigate();
  // const { token } = useAuth();
  // const [staffs, setStaffs] = useState([]);
  // const [positions, setPositions] = useState([]);
  const getCus = async (id) => await getCusService(id, token);
  const editCus = async (id, value) => {
    const res = await editCusService(id, value, token);
    if (res.data.status === "success") {
      toastSuccess(res.data.msg);
      nav("/dashboard/customer");
    } else toastError(res.data.msg);
  };
  const { token } = useAuth();
  const getAllCus = async () => {
    const { data } = await getAllCusService(token);
    if (data?.status === "success") return data;
    else {
      toastError(data?.msg);
      return data;
    }
  };
  const deleteCus = async (id) => {
    const { data } = await deleteCusService(id, token);
    if (data?.status === "success") {
      toastSuccess(data?.msg);
      return data;
    } else {
      toastError(data?.msg);
      return data;
    }
  };
  const addCus = async (value) => {
    const { data } = await addCusService(value, token);
    if (data?.status === "success") {
      toastSuccess(data?.msg);
      return data;
    } else {
      toastError(data?.msg);
      return data;
    }
  };
  return {
    getAllCus,
    deleteCus,
    addCus,
    getCus,
    editCus,
  };
}

export default useCus;
