import httpClient from "../httpClient";

export default async function getManagerLogs(params: any) {
  const { page, perPage } = params.pagination;
  const { target, action } = params.filter;

  let pathname = `/admin-office/histories?page=${page || 1}&limit=${perPage || 10}`;

  if (target) {
    pathname += `&target=${target}`;
  }

  if (action) {
    pathname += `&action=${action}`;
  }

  return httpClient(pathname).then(({ json }) => ({
    data: json.data.histories,
    total: json.data.total,
  }));
}
