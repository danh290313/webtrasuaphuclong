import {
    getOrders as getOrdersService,
    deleteOrder as deleteOrderService,
    addOrder as addOrderService,
    getOrder as getOrderService,
    editOrder as editOrderService,
  } from "@/services/orderApi";
  import { toastError, toastSuccess } from "@/utils/toast";
  import { useEffect, useState, useLayoutEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { toast } from "react-toastify";
  import useAuth from "./useAuth";
  export function useOrder() {
    const nav = useNavigate();
    const { token } = useAuth();
    // const [staffs, setStaffs] = useState([]);
    // const [positions, setPositions] = useState([]);
    const getOrder = async (id) => await getOrderService(id, token);
    const editOrder = async (id, value) => {
      const res = await editOrderService(id, value, token);
      if (res?.status === "success") {
        toastSuccess(res.msg);
        nav("/dashboard/order");
      } else toastError(res?.msg);
    };
    const getOrders = async (page) => {
      const res = await getOrdersService(page, token);
      return res;
    };
    const deleteOrder = async (id) => {
      const res = await deleteOrderService(id, token);
      if (res?.status === "success") {
        toastSuccess(res?.msg);
        return res;
      } else {
        toastError(res?.msg);
        return res;
      }
    };
    const addOrder = async (value) => {
      try {
        const res = await addOrderService(value, token);
        if (res?.status === "success") {
          toastSuccess(res?.msg);
          nav("/dashboard/order");
        }
       
      } catch (e) {
        console.error(e);
        toastError(e?.response?.data?.errors || e.message);
      }
  
    };
    return {
      getOrders,
      deleteOrder,
      addOrder,
      getOrder,
      editOrder,
    };
  }
  
  export default useOrder;
  