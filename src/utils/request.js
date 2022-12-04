import axios from "axios";
const request = axios.create({
  baseURL: "localhost:3000/api",
});
export const get = async (path, options = {}) => {
  const response = await request.get(path, options);
  return response.data;
};
export const post = async (path, data = {}, config = {}) => {
  const { token, ...rest } = config;
  const nconfig = { headers: { Authorization: `Bearer ${token}` }, rest };
  console.log({ nconfig });
  const response = await request.post(path, data, nconfig);
  return response.data;
};
export const put = async (path, data = {}, config = {}) => {
  const { token, ...rest } = config;
  const nconfig = { headers: { Authorization: `Bearer ${token}` }, rest };
  const response = await request.put(path, data, nconfig);
  return response.data;
};
export const deletereq = async (path, data = {}, config = {}) => {
  const { token, ...rest } = config;
  const nconfig = { headers: { Authorization: `Bearer ${token}` }, rest };
  const response = await request.delete(path, data, nconfig);
  return response.data;
};
export default request;
