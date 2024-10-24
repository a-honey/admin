import httpClient from "../httpClient";

export default function getManagers(params: any) {
  const { page, perPage } = params.pagination;

  const pathname = `/admin-info?page=${page}&limit=${perPage}`;

  return httpClient(pathname).then(({ json }) => ({
    data: json.data.admins,
    total: json.data.total,
  }));
}
