import Cookies from "js-cookie";
import axios from "axios";
import { baseApiUrl } from "../constants/env";

const AxiosInstance = axios.create({
  baseURL: baseApiUrl,
});

AxiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  if (refreshToken) {
    config.headers["x-refresh-token"] = refreshToken;
  }
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

AxiosInstance.interceptors.response.use(
  (response) => {
    const newAccessToken = response.headers["x-access-token"];
    if (newAccessToken) {
      Cookies.set("accessToken", newAccessToken, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove("refreshToken");
      Cookies.remove("accessToken");
      window.location.href = "/web/login";
    }
    return Promise.reject(error);
  },
);

export default AxiosInstance;
