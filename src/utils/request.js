import axios from "axios";
const request = axios.create({
  baseURL: "localhost:3000/api",
});
export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};
export const post = async (path, data = {}, config = {}) => {
  const response = await request.post(path, data, config);
  return response.data;
};
export default request;
