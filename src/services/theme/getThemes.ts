import httpClient from "../httpClient";

export default async function getThemes(params: any) {
  const { page, perPage } = params.pagination;

  const pathname = `/admin-office/stores/themes?page=${page}&limit=${perPage}`;

  return httpClient(pathname).then(({ json }) => ({
    data: json.data.themes,
    total: json.data.total,
  }));
}
