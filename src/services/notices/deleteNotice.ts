import httpClient from "../httpClient";

export default async function deleteNotice(noticeId: number | number[]) {
  if (Array.isArray(noticeId)) {
    const deletePromises = noticeId.map((id) => {
      const url = `/admin-support/notices/${id}`;
      const options = {
        method: "DELETE",
      };
      return httpClient(url, options).then(({ json }) => ({
        data: json.data,
      }));
    });

    const results = await Promise.all(deletePromises);
    return { data: results };
  } else {
    const url = `/admin-support/notices/${noticeId}`;
    const options = {
      method: "DELETE",
    };

    return httpClient(url, options).then(({ json }) => ({
      data: json.data,
    }));
  }
}
