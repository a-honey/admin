import { ManagerType } from "../../components/Manager";
import httpClient from "../httpClient";

export default async function getWaitingManagers() {
  const pathname = `/admin-info/inactive`;

  return httpClient(pathname).then(
    ({ json }) => json.data.admins as ManagerType[],
  );
}
