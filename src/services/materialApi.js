import { post, deletereq, get, put } from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllMaterial = async (token) => {
  const res = await get("/admin/get-materials", { token });
  return res;
};
export const getMaterials = async (page, token) => {
  const res = await get("/admin/materials?page=" + page, { token });
  return res;
};

export const addMaterial = async (val, token) => {
  const res = await post("/admin/materials", val, { token });
  return res;
};
export const getMaterial = async (id, token) => {
  const res = await get("/admin/materials/" + id, { token });
  return res;
};
export const editMaterial = async (id, data, token) => {
  const res = await put(`/admin/materials/${id}`, data, { token });
  return res;
};
export const deleteMaterial = async (id, token) => {
  const res = await deletereq(`/admin/materials/${id}`, {}, { token });
  return res;
};
