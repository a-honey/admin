import httpClient from "../httpClient";

export default async function getOneReport(params: any) {
  const url = `/admin-task/reports/${params.id}`;

  return httpClient(url).then(({ json }) => ({
    data: json.data,
  }));
}
