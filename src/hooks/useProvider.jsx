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
  const getProviders = async () => {
    const { data } = await getProvidersServices(token);
    if (data?.status === "success") return data;
    else {
      toastError(data?.msg);
      return data;
    }
  };
  const editProvider = async (value) => {
    const res = await editProviderServices(value, token);
    res.data.status === "success"
      ? toastSuccess(res.data.msg)
      : toastError(res.data.msg);
  };
  const deleteProvider = async (id) => {
    const res = await deleteProviderServices(id, token);
    res.data.status === "success"
      ? toastSuccess(res.data.msg)
      : toastError(res.data.msg);
  };
  const addProvider = async (val) => {
    const res = await addProviderServices(val, token);
    if (res.data.status === "success") {
      toastSuccess(res.data.msg);
      nav("/dashboard/provider");
    } else toastError(res.data.msg);
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
