import { post, deletereq, get, put } from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllDrinks = async (page, token) => {
  const res = get("/admin/drinks", { token });
  return res;
};
export const getDrink = async (id, token) => {
  const res = get("/admin/drinks/" + id, { token });
  return res;
};
export const getTypeofDrink = async (token) => {
  const res = get("/type-of-drinks/" ,{}, { token });
  return res;
};

