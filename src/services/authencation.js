import { useReducer } from "react";
import { get, post } from "../utils/request";
export const login = async (email, password, signal) => {
  const res = await post("/admin/login", { email, password }, { signal });
  return res;
};
