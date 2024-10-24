import httpClient from "../httpClient";

export default function getEssays(params: any) {
  const { page, perPage } = params.pagination;

  const filter = "all";

  const url = `/admin-management/essays?page=${page}&limit=${perPage}&filter=${filter}`;

  return httpClient(url).then(({ json }) => ({
    data: json.data.essays,
    total: json.data.total,
  }));
}
