import { EssayStatusType } from "../../components/Essay";
import httpClient from "../httpClient";

export default async function updateVersion(
  appId: number,
  version: EssayStatusType,
) {
  const url = `/admin-office/app/versions/${appId}`;

  const options = {
    method: "POST",
    data: { version },
  };

  return httpClient(url, options).then(({ json }) => ({
    data: json.data,
  }));
}
