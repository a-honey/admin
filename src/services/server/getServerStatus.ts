import httpClient from "../httpClient";

export default async function getServerStatus() {
  return httpClient("/admin-office/server/status").then(({ json }) => ({
    data: json.data,
  }));
}
