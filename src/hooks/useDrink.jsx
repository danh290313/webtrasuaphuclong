import {
  getAllDrinks as getAllDrinksService,
  getDrink as getDrinkService,
  getTypeofDrink as getTypeofDrinkService
} from "@/services/drinksApi";
import { toastError, toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
function useDrink() {
  const nav = useNavigate();
  const { token } = useAuth();
  const getAllDrinks = async (page) => {
    const res = await getAllDrinksService(page, token);
    return res;
  };
  const getDrink = async (id) => {
    const res = await getDrinkService(id, token);
    return res;
  };
  const getTypeofDrink = async () =>
  {
    const res = await getTypeofDrinkService(token);
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


  return { getAllDrinks, getDrink,getTypeofDrink };
}

export default useDrink;
