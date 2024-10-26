import httpClient from "../httpClient";

export default async function getOneNotice(params: any) {
  const url = `/api/admin-support/notices/${params.id}`;

  return httpClient(url).then(({ json }) => ({
    data: json.data,
  }));
}
