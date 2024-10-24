import httpClient from "../httpClient";

export default function getUsers(params: any) {
  const { filter, pagination } = params;
  const { page, perPage } = pagination;

  if (filter && filter.email) {
    const pathname = `/admin-management/users/search/${filter.email}`;

    return httpClient(pathname).then(({ json }) => {
      const users = Array.isArray(json.data) ? json.data : [json.data];
      return {
        data: users,
        total: users.length,
      };
    });
  }

  const pathname = `/admin-management/users?page=${page}&limit=${perPage}&filter=all`;

  return httpClient(pathname).then(({ json }) => ({
    data: json.data.users,
    total: json.data.total,
  }));
}
