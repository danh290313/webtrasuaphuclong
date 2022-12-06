import * as request from "@/utils/request";
// import images from "~/assets/images/bavarage";
const mats = {
  data: [
    {
      id: 1,
      name: "Sữa",
      uom: "kg",
    },
    {
      id: 2,
      name: "Đá",
      uom: "kg",
    },
    {
      id: 3,
      name: "Đường",
      uom: "kg",
    },
    {
      id: 4,
      name: "Trứng",
      uom: "quả",
    },
    {
      id: 5,
      name: "Trà",
      uom: "kg",
    },
  ],
  links: {
    first: "http://127.0.0.1:8000/api/admin/materials?page=1",
    last: "http://127.0.0.1:8000/api/admin/materials?page=2",
    prev: null,
    next: "http://127.0.0.1:8000/api/admin/materials?page=2",
  },
  meta: {
    current_page: 1,
    from: 1,
    last_page: 2,
    links: [
      {
        url: null,
        label: "&laquo; Previous",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/materials?page=1",
        label: "1",
        active: true,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/materials?page=2",
        label: "2",
        active: false,
      },
      {
        url: "http://127.0.0.1:8000/api/admin/materials?page=2",
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://127.0.0.1:8000/api/admin/materials",
    per_page: 5,
    to: 5,
    total: 6,
  },
};
export const getAllMaterial = async (signal) => {
  // const res = request.get("drinks", { signal });
  const res = {};
  res.data = mats;
  return res;
};
