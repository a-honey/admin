import httpClient from "../httpClient";

export default async function getGraphData() {
  const urls = [
    "/admin-dashboard/stats/essays/daily",
    "/admin-dashboard/stats/essays/monthly",
    "/admin-dashboard/stats/users/daily",
    "/admin-dashboard/stats/users/monthly",
    "/admin-dashboard/stats/payments/daily",
    "/admin-dashboard/stats/payments/monthly",
  ];

  try {
    const responses = await Promise.all(urls.map((url) => httpClient(url)));

    console.log(responses);
    return {
      essays: {
        daily: responses[0].json.data,
        monthly: responses[1].json.data,
      },
      users: {
        daily: responses[2].json.data,
        monthly: responses[3].json.data,
      },
      payments: {
        daily: responses[4].json.data,
        monthly: responses[5].json.data,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
