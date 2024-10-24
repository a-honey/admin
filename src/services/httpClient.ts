import { baseApiUrl } from "../constants/env";
import { fetchUtils } from "react-admin";

const httpClient = (url: string, options: any = {}) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (options.data) {
    options.data = JSON.stringify(options.data);
  }

  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }

  options.headers.set("Authorization", `Bearer ${accessToken}`);
  options.headers.set("x-refresh-token", refreshToken);

  const fullUrl = `${baseApiUrl}${url}`;
  return fetchUtils.fetchJson(fullUrl, options).then((response) => {
    const newAccessToken = response.headers.get("x-access-token");
    if (newAccessToken) {
      localStorage.setItem("accessToken", newAccessToken);
    }
    return response;
  });
};
export default httpClient;
