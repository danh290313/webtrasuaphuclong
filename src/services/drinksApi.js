import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllDrinks = async (page, token) => {
  const res = request.get("/admin/drinks", { token });
  return res;
};
export const getDrink = async (id, token) => {
  const res = request.get("/admin/drinks/" + id, { token });
  return res;
};
