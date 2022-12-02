import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllDrinks = async () => {
  try {
    const res = request.get("drinks");
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
};
