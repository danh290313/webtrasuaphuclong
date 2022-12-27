import {
  getWarehouses as getAllServices,
  deleteWarehouse as deleteWarehouseService,
  getWarehouse as getWarehouseService,
  addWarehouse as addWarehouseService,
  editWarehouse as editWarehouseService,

} from "@/services/warehouseApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
function useWarehouse() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getAllWarehouses = async (page) => {
    const res  = await getAllServices(page, token);
    return res;
  };
  const deleteWarehouse = async (id) => {
    const res = await deleteWarehouseService(id, token);
    if (res.status === "success") {
      toastSuccess(res.msg);
    } else {
      toastError(res.msg);
    }
    return res;
  };
  const getWarehouse = async (id) => {
    const res = await getWarehouseService(id, token);
  
    return res;
  };
  const editWarehouse = async (id, value) => {
    const res = await editWarehouseService(id, value, token);
    if(res.status === "success" )
      { toastSuccess(res.msg);
      nav("/dashboard/warehouse");
    } 
      else
      toastError(res.msg);
   
  };
  const addWarehouse = async (value) => {
    try {
      const  data  = await addWarehouseService(value, token);
      if (data?.status === "success") {
        toastSuccess(data?.msg);
        nav("/dashboard/warehouse");
      }
    } catch (e) {
      console.error("test trong add",e?.response?.data);
      toastError(e?.response?.data?.message || e.message);
    }
  };
  return { getAllWarehouses, deleteWarehouse, getWarehouse, addWarehouse, editWarehouse };
}

export default useWarehouse;
