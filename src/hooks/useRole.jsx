import {
  getAllRoles as getRolesServices,
 
} from "@/services/roleApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useRole() {
  const { token } = useAuth();
 
  const getRoles = async () => {
    const { data } = await getRolesServices(token);
    if (data?.status === "success") return data;
    else {
      toastError(data?.msg);
      return data;
    }
  };
  
  return {
    getRoles,
  };
}

export default useRole;
