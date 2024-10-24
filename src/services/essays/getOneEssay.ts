import httpClient from "../httpClient";

export default function getOneEssay(params: any) {
  const url = `/admin-management/essays/${params.id}`;

  return httpClient(url).then(({ json }) => ({
    data: json.data,
  }));
}
