
import { post, deletereq, get, put } from "@/utils/request";
const warehouse = {
  data: [
    {
      id: 1,
      name: "Chi nhánh Lê Văn Việt",
      address:
        "22 Lê Văn Việt, phường Tăng Nhơn Phú B, tp Thủ Đức, tp Hồ Chí Minh",
      phoneNumber: "0822341222",
      dateOpened: "2015-02-02",
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
    {
      id: 2,
      name: "Chi nhánh Nam Kì Khởi nghĩa",
      address:
        "133 Nam Kì Khởi nghĩa, phường 2, quận Bình Thạnh, tp Hồ Chí Minh",
      phoneNumber: "0811223322",
      dateOpened: "2017-09-12",
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
    {
      id: 3,
      name: "Chi nhánh Hồng Bàng",
      address: "66 Hồng Bàng, phường 10, quận 5, tp Hồ Chí Minh",
      phoneNumber: "0123123123",
      dateOpened: "2018-01-22",
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
  ],
  links: {
    first: "http://127.0.0.1:8000/api/admin/warehouse?page=1",
    last: "http://127.0.0.1:8000/api/admin/warehouse?page=1",
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
        url: "http://127.0.0.1:8000/api/admin/warehouse?page=1",
        label: "1",
        active: true,
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://127.0.0.1:8000/api/admin/warehouse",
    per_page: 5,
    to: 3,
    total: 3,
  },
};

export const getWarehouses = async (page, token) => {
  const res = await get("/admin/warehouses?page=" + page, { token });
  return res;
};
export const addWarehouse = async (val, token) => {
  const res = await post("/admin/warehouses", val, { token });
  return res;
};
export const getWarehouse = async (id, token) => {
  const res = await get("/admin/warehouses/" + id, { token });
  return res;
};
export const editWarehouse = async (id, data, token) => {
  const res = await put(`/admin/warehouses/${id}`, data, { token });
  return res;
};
export const deleteWarehouse = async (id, token) => {
  const res = await deletereq(`/admin/warehouses/${id}`, {}, { token });
  return res;
};

