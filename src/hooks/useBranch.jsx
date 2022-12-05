import {
  getBranches as getBranchesServices,
  getBranch as getBranchServices,
  editBranch as editBranchServices,
  deleteBranch as deleteBranchServices,
  addBranch as addBranchServices,
} from "@/services/branchApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useBranch() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getBranch = async (id) => await getBranchServices(id, token);
  const getBranches = async () => {
    const { data } = await getBranchesServices(token);
    if (data?.status === "success") return data;
    else {
      toastError(data?.msg);
      return data;
    }
  };
  const editBranch = async (value) => {
    const res = await editBranchServices(value, token);
    res.data.status === "success"
      ? toastSuccess(res.data.msg)
      : toastError(res.data.msg);
  };
  const deleteBranch = async (id) => {
    const res = await deleteBranchServices(id, token);
    res.data.status === "success"
      ? toastSuccess(res.data.msg)
      : toastError(res.data.msg);
  };
  const addBranch = async (val) => {
    const res = await addBranchServices(val, token);
    if (res.data.status === "success") {
      toastSuccess(res.data.msg);
      nav("/dashboard/staff");
    } else toastError(res.data.msg);
  };
 
  return {
    getBranches,
    getBranch,
    editBranch,
    deleteBranch,
    addBranch,
  };
}

export default useBranch;
