import httpClient from "../httpClient";

export default function getQuestions(params: any) {
  const { page, perPage } = params.pagination;

  const filter = "all";

  const url = `/admin-support/inquiries?page=${page}&limit=${perPage}&filter=${filter}`;

  return httpClient(url)
    .then(({ json }) => ({
      data: json.data.inquiries,
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
