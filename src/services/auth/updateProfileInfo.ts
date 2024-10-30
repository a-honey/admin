import { ManagerType } from "../../components/Manager";
import httpClient from "../httpClient";

export default async function updateProfileInfo(data: Partial<ManagerType>) {
  const url = `/admin-info`;

  const options = {
    method: "PUT",
    data: data,
  };

  return httpClient(url, options).then(({ json }) => ({
    data: json.data,
  }));
}
