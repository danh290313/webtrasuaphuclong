import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
export const getAllDrinks = async (signal) => {
  try {
    const res = request.get("drinks", { signal });
    return res;
  } catch (err) {
    throw new Error(err.message);
  }
};
