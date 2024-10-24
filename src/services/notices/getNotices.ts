import httpClient from "../httpClient";

export default function getNotices(params: any) {
  const { page, perPage } = params.pagination;

  const filter = "all";

  const url = `/admin-management/admin-support/notices?page=${page}&limit=${perPage}&filter=${filter}`;

  return httpClient(url)
    .then(({ json }) => ({
      data: json.data.Notices,
      total: json.data.total,
    }))
    .catch((error) => {
      if (error.status === 404) {
        return {
          data: [],
          total: 0,
        };
      }

      throw error;
    });
}
