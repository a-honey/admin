import { baseApiUrl } from "../constants/env";
import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const apiUrl = `${baseApiUrl}/admin-management`;

const token = localStorage.getItem("accessToken");

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  options.headers.set("Authorization", `Bearer ${token}`);

  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(apiUrl, httpClient);

const customDataProvider = {
  ...dataProvider,
  getList: (resource: string, params: any) => {
    if (resource === "users") {
      const { page, perPage } = params.pagination;

      const filter = "all";

      const url = `${apiUrl}/${resource}?page=${page}&limit=${perPage}&filter=${filter}`;

      return httpClient(url).then(({ json }) => ({
        data: json.data.users,
        total: json.data.total,
      }));
    }
    if (resource === "essays") {
      const { page, perPage } = params.pagination;

      const filter = "all";

      const url = `${apiUrl}/${resource}?page=${page}&limit=${perPage}&filter=${filter}`;

      return httpClient(url).then(({ json }) => ({
        data: json.data.essays,
        total: json.data.total,
      }));
    }
    return dataProvider.getList(resource, params);
  },
};

export default customDataProvider;
