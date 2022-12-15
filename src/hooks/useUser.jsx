import {
  getUsers as getUsersServices,
  deleteUser as deleteUserServices,
  addUser as addUserServices,
  getUser as getUserServices,
  editUser as editUserServices,
} from "@/services/userApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useUser() {
  const nav = useNavigate();

  const { token } = useAuth();

  const getUser = async (id) => await getUserServices(id, token);
  const getUsers = async (page) => {
    const res = await getUsersServices(page, token);
    return res;
  };
  const editUser = async (id,value) => {
    const res = await editUserServices(id, value, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const deleteUser = async (id) => {
    const res = await deleteUserServices(id, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const addUser = async (val) => {
    const res = await addUserServices(val, token);
    if (res.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/users");
    } else toastError(res.msg);
  };


  
  return {
    getUsers,
    deleteUser,
    addUser,
    getUser,
    editUser,
  };
}

export default useUser;
