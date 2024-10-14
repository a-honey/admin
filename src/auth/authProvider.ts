import { AuthProvider, HttpError } from "react-admin";

import axios from "axios";
import { baseApiUrl } from "../constants/env";

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    try {
      const response = await axios.post(`${baseApiUrl}/admin-auth/login`, {
        email: username,
        password,
      });

      const { accessToken, refreshToken } = response.data;

      localStorage.setItem("accessToken", JSON.stringify(accessToken));
      localStorage.setItem("refreshToken", JSON.stringify(refreshToken));

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(
        new HttpError("Unauthorized", 401, { message: "권한이 없습니다" }),
      );
    }
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("accessToken") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;
