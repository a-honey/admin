import httpClient from "../httpClient";

export default function getUsers(params: any) {
  const { page, perPage } = params.pagination;

  const filter = "all";

  const pathname = `/admin-management/users?page=${page}&limit=${perPage}&filter=${filter}`;

  return httpClient(pathname).then(({ json }) => ({
    data: json.data.users,
    total: json.data.total,
  }));
}
