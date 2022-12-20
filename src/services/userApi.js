import { post, deletereq, get, put } from "@/utils/request";

const users = {
  data: [
    {
      id: 1,
      email: "Danh@gmail.com",
      password: "",
      role: 
        {
          id: 1,
          name: "Quan ly",
        },
      
    },
    {
      id: 2,
      email: "Danh@gmail.com",
      password: "123",
      role: 
        {
          id: 2,
          name: "Nha Bep",
        },
        
      
    },
   
  ],
  links: {
    first: "http://127.0.0.1:8000/api/admin/users?page=1",
    last: "http://127.0.0.1:8000/api/admin/users?page=1",
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
        url: "http://127.0.0.1:8000/api/admin/users?page=1",
        label: "1",
        active: true,
      },
      {
        url: null,
        label: "Next &raquo;",
        active: false,
      },
    ],
    path: "http://127.0.0.1:8000/api/admin/users",
    per_page: 5,
    to: 4,
    total: 4,
  },
};
export const getUsers = async (page, token) => {
  const res = await get("/admin/users?page=" + page, { token });
  return res;
};
export const addUser = async (val, token) => {
  const res = await post("/admin/users", val, { token });
  return res;
};
export const getUser = async (id, token) => {
  const res = await get("/admin/users/" + id, { token });
  return res;
};
export const editUser = async (id, data, token) => {
  const res = await put(`/admin/users/${id}`, data, { token });
  return res;
};
export const deleteUser = async (id, token) => {
  const res = await deletereq(`/admin/users/${id}`, {}, { token });
  return res;
};
export const resetPassUser = async (id, token) => {
  const res = await post(`/admin/users/reset-password/${id}`, {}, { token });
  return res;
};

