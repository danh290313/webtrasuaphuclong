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

export const getRoles = async (token) => {
  const res = await get("/admin/roles", { token });
  return res;
};
