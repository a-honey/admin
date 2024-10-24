import httpClient from "../httpClient";

export default function getOneUser(params: any) {
  const url = `/admin-management/users/${params.id}`;

  return httpClient(url).then(({ json }) => ({
    data: json.data,
  }));
}
