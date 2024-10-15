import AxiosInstance from "..";

export default async function getServerStatus() {
  try {
    const response = await AxiosInstance.get("/admin-office/server/status");

    return response.data;
  } catch (e) {
    console.log("서버 에러 발생", e);
    return { data: "error" };
  }
}
