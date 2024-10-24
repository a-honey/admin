import httpClient from "../httpClient";

export default function getCounts() {
  const url = `/admin-dashboard`;

  return httpClient(url).then(({ json }) => {
    return json.data as ResponseGetCounts;
  });
}

type ResponseGetCounts = {
  totalUser: 0;
  currentSubscriber: 0;
  todaySubscribers: 0;
  totalEssays: 0;
  todayEssays: 0;
  publishedEssays: 0;
  linkedOutEssays: 0;
  unprocessedReports: 0;
  unprocessedReviews: 0;
};
