import httpClient from "../httpClient";

export default function getOneManager(params: any) {
  const url = `/admin-info/${params.id}`;

  return httpClient(url).then(({ json }) => ({
    data: json.data,
  }));
}
