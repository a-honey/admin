import httpClient from "../httpClient";

export default async function getGeulroquis(params: any) {
  const { page, perPage } = params.pagination;

  const pathname = `/admin-office/geulroquis?page=${page}&limit=${perPage}`;

  return httpClient(pathname).then(({ json }) => ({
    data: json.data.quleroquisDto,
    total: json.data.total,
  }));
}
