import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllDrinks = async (signal) => {
  const res = request.get("drinks", { signal });
  return res;
};
