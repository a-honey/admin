import httpClient from "../httpClient";

export default function getMyInfo() {
  const url = `/users/info`;

  return httpClient(url).then(({ json }) => ({
    data: json.data,
  }));
}
