import httpClient from "../httpClient";

export default async function getVersion() {
  const url = `/admin-office/app/versions
`;

  return httpClient(url).then(({ json }) => {
    console.log(json.data);
    return json.data as VersionType[];
  });
}

type ResponseGetVersion = {
  id: 0;
  appType: "string";
  version: "string";
  releaseDate: "2024-10-26T07:23:21.803Z";
  createdDate: "2024-10-26T07:23:21.803Z";
  updatedDate: "2024-10-26T07:23:21.803Z";
};

export type VersionType = ResponseGetVersion;
