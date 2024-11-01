import httpClient from "../httpClient";

export type RegisterBodyType = {
  email: string;
  password: string;
  name: string;
};

export default async function postRegister(body: RegisterBodyType) {
  const url = `/admin-auth/register`;

  const options = {
    method: "POST",
    body: JSON.stringify(body),
  };

  return httpClient(url, options).then(({ json }) => ({
    data: json.data,
  }));
}
