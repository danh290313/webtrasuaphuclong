import { post, deletereq, get, put } from "@/utils/request";

const role = {
  status: "success",
  roles: [
    {
      id: 1,
      name: "Toàn quyền hệ thống",
    },
    {
      id: 2,
      name: "Cho phép sửa",
    },
    {
      id: 3,
      name: "Chỉ được quyền xem",
    },
    
  ],
};

export const getAllRoles = async (signal, token) => {
  //   const res = await post("/admin/staffs", {}, { signal, token });
  const res = {};
  res.data = role.roles;
  return res;
};
