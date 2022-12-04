import { post, deletereq, get, put } from "@/utils/request";

const warehouses = {
  data: [
    {
      id: 1,
      name: "Kho số 1",
      address: "số 1 đường 9, tp Thủ Đức, tp Hồ Chí Minh",
      phoneNumber: "0988888888",
      dateOpened: "2015-01-05",
      active: 1,
      materialsOfBranch: [
        {
          id: 1,
          name: "Sữa",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 2,
          name: "Đá",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 3,
          name: "Đường",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 4,
          name: "Trứng",
          uom: "quả",
          amount: "0.0000",
        },
        {
          id: 5,
          name: "Trà",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 6,
          name: "Cà phê",
          uom: "kg",
          amount: "0.0000",
        },
      ],
    },
    {
      id: 2,
      name: "Kho số 2",
      address: "số 1 đường 9, tp Thủ Đức, tp Hồ Chí Minh",
      phoneNumber: "0888123123",
      dateOpened: "2015-11-05",
      active: 1,
      materialsOfBranch: [
        {
          id: 1,
          name: "Sữa",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 2,
          name: "Đá",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 3,
          name: "Đường",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 4,
          name: "Trứng",
          uom: "quả",
          amount: "0.0000",
        },
        {
          id: 5,
          name: "Trà",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 6,
          name: "Cà phê",
          uom: "kg",
          amount: "0.0000",
        },
      ],
    },
  ],
  links: {
    first: "http://127.0.0.1:8000/api/admin/warehouses?page=1",
    last: "http://127.0.0.1:8000/api/admin/warehouses?page=1",
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
        url: "http://127.0.0.1:8000/api/admin/warehouses?page=1",
        label: "1",
        active: true,
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://127.0.0.1:8000/api/admin/warehouses",
    per_page: 5,
    to: 2,
    total: 2,
  },
};
export const getAllWarehouses = async (token) => {
  // const res = await get("/admin/warehouses", { token });
  const res = {};
  res.data = warehouses;
  return res;
};
// export const addCus = async (val, token) => {
//   //   const res = await post("/admin/customers",val, { token });
//   const res = {};
//   res.data = {
//     status: "success",
//     msg: "Thêm khách hàng thành công",
//   };
//   return res;
// };
// //   return res;
// // };
export const getWarehouse = async (id, token) => {
  //   const res = await post("/admin/staffs", {id}, {  token });
  const res = {};
  res.data = {
    status: "success",
    warehouseInfo: {
      id: 5,
      name: "Nha kho moi",
      address: "123 Man Thien bla bla bla",
      phone_number: "0232325565",
      date_opened: "2018-01-01",
      active: 1,
      materialsOfWarehouse: [
        {
          id: 1,
          name: "Sữa",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 2,
          name: "Đá",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 3,
          name: "Đường",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 4,
          name: "Trứng",
          uom: "quả",
          amount: "0.0000",
        },
        {
          id: 5,
          name: "Trà",
          uom: "kg",
          amount: "0.0000",
        },
        {
          id: 6,
          name: "Cà phê",
          uom: "kg",
          amount: "0.0000",
        },
      ],
    },
  };
  return res;
};
// export const editCus = async (id, data, token) => {
//   //   const res = await put(`/admin/staffs${id}`, data, { token });
//   const res = {};
//   res.data = {
//     status: "success",
//     msg: "Sửa thông tin nhân viên thành công.",
//   };
//   return res;
// };
export const deleteWarehouse = async (id, token) => {
  //   const res = await delete(`/admin/staffs/${id}`, data, { token });
  const res = {};
  res.data = {
    status: "success",
    msg: "Xóa nhà kho thành công",
  };
  return res;
};
