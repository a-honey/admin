import httpClient from "../httpClient";

export default async function updateManagerStatus(
  managerId: number,
  isActiveStatus: boolean,
) {
  const url = `/admin-root/${managerId}?activated=${isActiveStatus}`;

  const options = {
    method: "PUT",
  };

  return httpClient(url, options).then(({ json }) => ({
    data: json.data,
  }));
}
