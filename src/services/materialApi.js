import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllMaterial = async (token) => {
  const res = await request.get("/admin/get-materials", { token });
  return res;
};
export const getMaterials = async (page, token) => {
  const res = await request.get("/admin/materials?page=" + page, { token });
  return res;
};
