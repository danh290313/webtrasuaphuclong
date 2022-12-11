import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllMaterial = async (token) => {
  const res = await request.get("/admin/get-materials", { token });
  return res;
};
