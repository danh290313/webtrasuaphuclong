import { post, deletereq, get, put } from "@/utils/request";

const customers = {
  data: [
    {
      id: 1,
      name: "Trần Văn C",
      gender: 0,
      phoneNumber: "0111222333",
      dob: null,
      addresses: [
        {
          id: 1,
          address: "90 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 2,
          address: "91 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 3,
          address: "92 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 4,
          address: "93 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 5,
          address: "94 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
      ],
      active: 1,
    },
    {
      id: 2,
      name: "Lê Văn C",
      gender: 0,
      phoneNumber: "0123122222",
      dob: null,
      addresses: [
        {
          id: 6,
          address: "1 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 7,
          address: "2 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 8,
          address: "33 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 9,
          address: "22 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 10,
          address: "55 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
      ],
      active: 1,
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      gender: 0,
      phoneNumber: "0111888777",
      dob: null,
      addresses: [
        {
          id: 11,
          address: "22 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
        {
          id: 12,
          address: "55 Man Thien, phuong Hiep Phu, Tp Thu Duc, Tp Ho Chi Minh",
        },
      ],
      active: 1,
    },
    {
      id: 4,
      name: "Trương Hoàng S",
      gender: 0,
      phoneNumber: "0123777334",
      dob: null,
      addresses: [],
      active: 1,
    },
  ],
  links: {
    first: "http://127.0.0.1:8000/api/admin/customers?page=1",
    last: "http://127.0.0.1:8000/api/admin/customers?page=1",
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
        url: "http://127.0.0.1:8000/api/admin/customers?page=1",
        label: "1",
        active: true,
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://127.0.0.1:8000/api/admin/customers",
    per_page: 5,
    to: 4,
    total: 4,
  },
};
export const getAllCus = async (token) => {
  // const res = await get("/admin/customers", { token });
  const res = {};
  res.data = customers;
  return res;
};
export const addCus = async (val, token) => {
  //   const res = await post("/admin/customers",val, { token });
  const res = {};
  res.data = {
    status: "success",
    msg: "Thêm khách hàng thành công",
  };
  return res;
};
//   return res;
// };
export const getCus = async (id, token) => {
  //   const res = await post("/admin/staffs", {id}, {  token });
  const res = {};
  res.data = {
    data: {
      id: 6,
      name: "Lê Văn N",
      gender: 0,
      phoneNumber: "0334566733",
      dob: "1998-01-09",
      addresses: [],
      active: 1,
    },
  };
  return res;
};
// export const getAllPositions = async (signal, token) => {
//   //   const res = await post("/admin/staffs", {}, { signal, token });
//   const res = {};
//   res.data = pos;
//   return res;
// };

export const editCus = async (id, data, token) => {
  //   const res = await put(`/admin/staffs${id}`, data, { token });
  const res = {};
  res.data = {
    status: "success",
    msg: "Sửa thông tin nhân viên thành công.",
  };
  return res;
};
export const deleteCus = async (id, token) => {
  //   const res = await delete(`/admin/staffs/${id}`, data, { token });
  const res = {};
  res.data = {
    status: "success",
    msg: "Xóa khách hàng thành công",
  };
  return res;
};

// export const resetPassStaff = async (id, token) => {
//   //   const res = await post(`/admin/staffs/${id}`, data, { token });
//   const res = {};
//   res.data = {
//     status: "success",
//     msg: "reset pass nhân viên thành công",
//   };
//   return res;
// };
