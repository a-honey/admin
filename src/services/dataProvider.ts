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
    if (resource === "notices") {
      const { page, perPage } = params.pagination;

      const filter = "all";

      const url = `${baseApiUrl}/admin-support/${resource}?page=${page}&limit=${perPage}&filter=${filter}`;

      return httpClient(url).then(({ json }) => ({
        data: json.data.Notices,
        total: json.data.total,
      }));
    }
    if (resource === "managers") {
      // const { page, perPage } = params.pagination;

      const filter = "all";

      const url = `${baseApiUrl}/admin-info/?activated=true`;

      return httpClient(url).then(({ json }) => ({
        data: json.data.admins,
        total: json.data.total,
      }));
    }
    return dataProvider.getList(resource, params);
  },

  getOne: (resource: any, params: any) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url).then(({ json }) => ({
      data: json.data,
    }));
  },
};

export default customDataProvider;
