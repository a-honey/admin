import httpClient from "../httpClient";

export default async function postGeulroquis(body: FormData) {
  const url = `/admin-office/geulroquis`;

  const options = {
    method: "POST",
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return httpClient(url, options).then(({ json }) => ({
    data: json.data,
  }));
}
