import {
  getRoles as getRolesServices,
 
} from "@/services/roleApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
export function useRole() {
  const { token } = useAuth();
 
  const getRoles = async () => {
    const res = await getRolesServices(token);
    if (res?.status === "success") return res;
    else {
      toastError(res?.msg);
      return res;
    }
  };
  
  return {
    getRoles,
  };
}

export default useRole;
