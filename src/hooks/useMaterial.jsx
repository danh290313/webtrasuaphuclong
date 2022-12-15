import {
  getAllMaterial as getAllMaterialService,
  getMaterials as getMaterialsService,
  deleteMaterial as deleteMaterialService,
  addMaterial as addMaterialService,
  getMaterial as getMaterialService,
  editMaterial as editMaterialService,
} from "@/services/materialApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
function useMaterial() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getAllMaterial = async () => {
    const res = await getAllMaterialService(token);
    return res;
  };
  const getMaterial = async (id) => await getMaterialService(id, token);
  const editMaterial = async (id, value) => {
    const res = await editMaterialService(id, value, token);
    console.log("danh", res);
    if (res?.status === "success") {
      toastSuccess(res.msg);
      nav("/dashboard/material");
    } else toastError(res?.msg);
  };
  const getMaterials = async (page) => {
    const res = await getMaterialsService(page, token);
    return res;
  };
  const deleteMaterial = async (id) => {
    const res = await deleteMaterialService(id, token);
    if (res?.status === "success") {
      toastSuccess(res?.msg);
      return res;
    } else {
      toastError(res?.msg);
      return res;
    }
  };
  const addMaterial = async (value) => {
    try {
      const res = await addMaterialService(value, token);
      console.log("danh",res);
      if (res?.status === "success") {
        toastSuccess(res?.msg);
        
      }
     
    } catch (e) {
      console.error(e);
      toastError(e?.response?.data?.errors || e.message);
    }
    nav("/dashboard/material");

  };
  return {
    getMaterials,
    deleteMaterial,
    addMaterial,
    getMaterial,
    editMaterial,
  };

}

export default useMaterial;
