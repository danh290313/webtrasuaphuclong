import { post, deletereq, get, put } from "@/utils/request";
export const getAllCus = async (token) => {
  const res = await get("/admin/customers", { token });
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
  console.log({ id, data, token });
  const res = await put(`/admin/customers${id}`, data, { token });
  return res;
};
export const deleteCus = async (id, token) => {
  const res = await delete (`/admin/staffs/${id}`, data, { token });
  return res;
};
