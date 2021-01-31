import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000
});
instance.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
instance.interceptors.response.use(
  res => {
    return res.data ? res.data : res;
  },
  err => {
    return Promise.reject(err);
  }
);
export default instance;
