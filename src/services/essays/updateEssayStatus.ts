import { EssayStatusType } from "../../components/Essay";
import httpClient from "../httpClient";

export default async function updateEssayStatus(
  essayId: number,
  status: EssayStatusType,
) {
  const url = `/admin-management/essays/${essayId}`;

  const options = {
    method: "PUT",
    data: { status },
  };

  return httpClient(url, options).then(({ json }) => ({
    data: json.data,
  }));
}
