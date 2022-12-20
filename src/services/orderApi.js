import { post, deletereq, get, put } from "@/utils/request";
export const getOrders = async (page, token) => {
  const res = await get("/admin/orders?page=" + page, { token });
  return res;
};
export const addOrder = async (val, token) => {
  const res = await post("/admin/orders", val, { token });
  return res;
};
export const getOrder = async (id, token) => {
  const res = await get("/admin/orders/" + id, { token });
  return res;
};
export const editOrder = async (id, data, token) => {
  const res = await put(`/admin/orders/${id}`, data, { token });
  return res;
};
export const deleteOrder = async (id, token) => {
  const res = await deletereq(`/admin/orders/${id}`, {}, { token });
  return res;
};
