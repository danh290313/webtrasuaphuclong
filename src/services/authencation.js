import { useReducer } from "react";
import { get, post } from "../utils/request";

const user = {
  status: "success",
  information: {
    id: 1,
    name: "testing api",
    phoneNumber: "0123123123",
    gender: 1,
    address: "Test",
    hometown: "An Giang",
    dob: "2001-04-01",
    branch: {
      id: 1,
      name: "Chi nhánh Lê Văn Việt",
      address:
        "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
      phoneNumber: "0822341222",
      dateOpened: "2015-02-02",
      active: 1,
    },
    position: {
      id: 1,
      name: "Quản lí",
    },
    active: 1,
  },
  roleUser: {
    id: 1,
    name: "Quản lí",
  },
  token: "8|sF6f2qPvFj60cRhja96VIpcBmqjv0QOWKurNJW0J",
};
const errorUser = {
  status: "error",
  msg: "Xác thực không thành công.",
};
export const login = async (email, password, signal) => {
  // const res = await post("/admin/login", { email, password }, { signal });
  const res = {};
  res.data = user;
  return res;
};
