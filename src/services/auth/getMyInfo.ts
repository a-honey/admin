import { ManagerType } from "../../components/Manager";
import httpClient from "../httpClient";

export default function getMyInfo() {
  const url = `/admin-info/my`;

  return httpClient(url).then(({ json }) => json.data as ManagerType);
}
