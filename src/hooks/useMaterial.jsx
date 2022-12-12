import {
  getAllMaterial as getAllMaterialService,
  getMaterials as getMaterialsService,
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
  const getMaterials = async (page) => {
    const res = await getMaterialsService(page, token);
    return res;
  };
  // const deleteWarehouse = async (id) => {
  //   const { data } = await deleteWarehouseService(id, token);
  //   if (data.status === "success") {
  //     toastSuccess(data.msg);
  //   } else {
  //     toastError(data.msg);
  //   }
  //   return data;
  // };
  // const getWarehouse = async (id) => {
  //   const { data } = await getWarehouseService(id, token);
  //   !data && toastError("Error finding warehouse");
  //   return data;
  // };
  return { getAllMaterial, getMaterials };
}

export default useMaterial;
