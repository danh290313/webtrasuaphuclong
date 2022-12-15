import {
  getProviders as getProvidersServices,
  getProvider as getProviderServices,
  editProvider as editProviderServices,
  deleteProvider as deleteProviderServices,
  addProvider as addProviderServices,
} from "@/services/providerApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useProvider() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getProvider = async (id) => await getProviderServices(id, token);
  const getProviders = async (page) => {
    const res = await getProvidersServices(page, token);
    return res;
  };
  const editProvider = async (id,value) => {
    const res = await editProviderServices(id, value, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
    nav("/dashboard/provider");
  };
  const deleteProvider = async (id) => {
    const res = await deleteProviderServices(id, token);
    res.status === "success" ? toastSuccess(res.msg) : toastError(res.msg);
  };
  const addProvider = async (val) => {
    const res = await addProviderServices(val, token);
    if (res.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/provider");
    } else toastError(res.msg);
  };
 
  return {
    getProviders,
    getProvider,
    editProvider,
    deleteProvider,
    addProvider,
  };
}

export default useProvider;
