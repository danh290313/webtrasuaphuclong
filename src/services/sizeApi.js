import { post, deletereq, get, put } from "@/utils/request";
export const getSizes = async (page, token) => {
  const res = await get("/admin/sizes?page=" + page, { token });
  return res;
};
export const addSize = async (val, token) => {
  const res = await post("/admin/sizes", val, { token });
  return res;
};
export const getSize = async (id, token) => {
  const res = await get("/admin/sizes/" + id, { token });
  return res;
};
export const editSize = async (id, data, token) => {
  const res = await put(`/admin/sizes/${id}`, data, { token });
  return res;
};
export const deleteSize = async (id, token) => {
  const res = await deletereq(`/admin/sizes/${id}`, {}, { token });
  return res;
};
