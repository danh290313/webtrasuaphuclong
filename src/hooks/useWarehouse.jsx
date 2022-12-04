import {
  getAllWarehouses as getAllServices,
  deleteWarehouse as deleteWarehouseService,
  getWarehouse as getWarehouseService,
} from "@/services/warehouseApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
function useWarehouse() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getAllWarehouses = async () => {
    const { data } = await getAllServices(token);
    return data;
  };
  const deleteWarehouse = async (id) => {
    const { data } = await deleteWarehouseService(id, token);
    if (data.status === "success") {
      toastSuccess(data.msg);
    } else {
      toastError(data.msg);
    }
    return data;
  };
  const getWarehouse = async (id) => {
    const { data } = await getWarehouseService(id, token);
    !data && toastError("Error finding warehouse");
    return data;
  };
  return { getAllWarehouses, deleteWarehouse, getWarehouse };
}

export default useWarehouse;
