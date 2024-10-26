import httpClient from "../httpClient";

export default async function getOneTheme(params: any) {
  // const url = `/admin-office/stores/themes/${params.id}`;
  const url = `/admin-office/stores/themes`;
  return httpClient(url).then(({ json }) => ({
    data: json.data.themes[0],
  }));
}
