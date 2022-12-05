import { post } from "@/utils/request";
const providers = {
  data: [
    {
      id: 1,
      name: "Masan",
      address:
        "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
      phoneNumber: "0822341222",
      active: 1,
    
    },
    {
      id: 2,
      name: "Nguyên liệu trà sữa Lê Gia",
      address:
        "133 Nam Kì Khởi nghĩa, phường 2, quận Bình Thạnh, tp Hồ Chí Minh",
      phoneNumber: "0811223322",
      active: 1,
      
    },
    {
      id: 3,
      name: "Công ty cà phê Việt ",
      address: "66 Hồng Bàng, phường 10, quận 5, tp Hồ Chí Minh",
      phoneNumber: "0123123123",
      active: 1,
     
    },
  ],
  links: {
    first: "http://127.0.0.1:8000/api/admin/provideres?page=1",
    last: "http://127.0.0.1:8000/api/admin/providers?page=1",
    prev: null,
    next: null,
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/providers?page=1",
        label: "1",
        active: true,
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://127.0.0.1:8000/api/admin/providers",
    per_page: 5,
    to: 3,
    total: 3,
  },
};
export const getProviders = async (token) => {
  //   const res = post("/admin/providers", {}, { token });
  const res = {};
  res.data = providers;
  return res;
};

export const getProvider = async (id, token) => {
  //   const res = await post("/admin/staffs", {id}, {  token });
  const res = {};
  res.data = providers;
  return res;
};

export const editProvider = async (data, token) => {
  //   const res = await put("/admin/staffs", data, { token });
  const res = {};
  res.data = {
    status: "success",
    msg: "Sửa thông tin cung cấp thành công.",
  };
  return res;
};
export const deleteProvider = async (id, token) => {
  //   const res = await delete(`/admin/staffs/${id}`, data, { token });
  const res = {};
  res.data = {
    status: "success",
    msg: "Xóa cung cấp thành công",
  };
  return res;
};
export const addProvider = async (val, token) => {
  //   const res = await post("/admin/staffs",val, { token });
  const res = {};
  res.data = {
    status: "success",
    msg: "Thêm cung cấp thành công",
  };

  return res;
};

