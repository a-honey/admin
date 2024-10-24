import httpClient from "../httpClient";

export default async function postNotice(body: any) {
  const url = `/admin-support/notices`;

  const options = {
    method: "POST",
    data: body,
  };

  return httpClient(url, options).then(({ json }) => ({
    data: json.data,
  }));
}
