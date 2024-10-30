import httpClient from "../httpClient";

export default async function getReports(params: any) {
  const { page, perPage } = params.pagination;

  const filter = "all";

  const url = `/admin-task/reports?page=${page}&limit=${perPage}&filter=${filter}`;

  return httpClient(url)
    .then(({ json }) => ({
      data: json.data.reports.map((el: any) => ({
        ...el,
        id: el.essayId,
      })),
      total: json.data.totalReports,
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
