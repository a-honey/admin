import { AuthProvider, HttpError } from "react-admin";

import axios from "axios";
import { baseApiUrl } from "../constants/env";
import getServerStatus from "../services/server/getServerStatus";

export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const response = await axios.post(`${baseApiUrl}/admin-auth/login`, {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

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
  checkAuth: async () => {
    if (localStorage.getItem("accessToken")) {
      try {
        await getServerStatus();

        return Promise.resolve();
      } catch (error) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        return Promise.reject();
      }
    }
    return Promise.reject();
  },
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
