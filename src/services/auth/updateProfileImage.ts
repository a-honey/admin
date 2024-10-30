import AxiosInstance from "../../api";

export default async function updateProfileImage(image: File) {
  const url = `/admin-info/images`;

  const formData = new FormData();
  formData.append("image", image);

  return AxiosInstance.post(url, formData);
}
