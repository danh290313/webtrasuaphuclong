import {
  getSizes as getSizesService,
  deleteSize as deleteSizeService,
  addSize as addSizeService,
  getSize as getSizeService,
  editSize as editSizeService,
} from "@/services/sizeApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useSize() {
  const nav = useNavigate();
  const { token } = useAuth();
  // const [staffs, setStaffs] = useState([]);
  // const [positions, setPositions] = useState([]);
  const getSize = async (id) => await getSizeService(id, token);
  const editSize = async (id, value) => {
    const res = await editSizeService(id, value, token);
    if (res?.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/size");
    } else toastError(res?.msg);
  };
  const getSizes = async (page) => {
    const res = await getSizesService(page, token);
    return res;
  };
  const deleteSize = async (id) => {
    const res = await deleteSizeService(id, token);
    if (res?.status === "success") {
      toastSuccess(res?.msg);
      return res;
    } else {
      toastError(res?.msg);
      return res;
    }
  };
  const addSize = async (value) => {
    try {
      const res = await addSizeService(value, token);
      if (res?.status === "success") {
        toastSuccess(res?.msg);
        nav("/dashboard/size");
      }
    } catch (e) {
      console.log(e?.response?.data || e.message);
      toastError(e?.response?.data?.message || e.message);
    }
  };
  return {
    getSizes,
    deleteSize,
    addSize,
    getSize,
    editSize,
  };
}

export default useSize;
