import { post, deletereq, get, put } from "@/utils/request";
export const getAllCus = async (page, token) => {
  const res = await get("/admin/customers?page=" + page, { token });
  return res;
};
export const addCus = async (val, token) => {
  const res = await post("/admin/customers", val, { token });
  return res;
};
export const getCus = async (id, token) => {
  const res = await get("/admin/customers/" + id, { token });
  return res;
};
export const editCus = async (id, data, token) => {
  const res = await put(`/admin/customers/${id}`, data, { token });
  return res;
};
export const deleteCus = async (id, token) => {
  const res = await deletereq(`/admin/customers/${id}`, {}, { token });
  return res;
};
