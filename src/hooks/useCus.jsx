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
  const { token } = useAuth();
  // const [staffs, setStaffs] = useState([]);
  // const [positions, setPositions] = useState([]);
  const getCus = async (id) => await getCusService(id, token);
  const editCus = async (id, value) => {
    const res = await editCusService(id, value, token);
    if (res?.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/customer");
    } else toastError(res?.msg);
  };
  const getAllCus = async (page) => {
    const res = await getAllCusService(page, token);
    return res;
  };
  const deleteCus = async (id) => {
    const res = await deleteCusService(id, token);
    if (res?.status === "success") {
      toastSuccess(res?.msg);
      return res;
    } else {
      toastError(res?.msg);
      return res;
    }
  };
  const addCus = async (value) => {
    const { data } = await addCusService(value, token);
    console.log({ data });
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
