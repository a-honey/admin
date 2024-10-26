import httpClient from "../httpClient";

export default async function getReleases(params: any) {
  const { page, perPage } = params.pagination;

  const filter = "all";

  const url = `/admin-support/releases?page=${page}&limit=${perPage}&filter=${filter}`;

  return httpClient(url)
    .then(({ json }) => ({
      data: json.data.releases,
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
