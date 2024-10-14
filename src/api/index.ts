import Cookies from "js-cookie";
import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_ROOT_API_URL,
});

AxiosInstance.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");
  const refreshToken = Cookies.get("refreshToken");
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
