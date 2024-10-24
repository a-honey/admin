import getCounts from "../../../services/analysis/getCounts";
import { useQuery } from "@tanstack/react-query";

const UserCount = () => {
  const { data: countsData } = useQuery({
    queryFn: () => {
      return getCounts();
    },
    queryKey: ["analysis", "counts"],
  });

  return (
    <div style={{ width: "100%", paddingLeft: "50px" }}>
      <UserCountItem label="총 가입자" value={countsData?.totalUser} />
      <UserCountItem
        label="프리미엄 구독자"
        value={countsData?.currentSubscriber}
      />
      <UserCountItem
        label="오늘 가입한 사용자"
        value={countsData?.todaySubscribers}
      />
      <UserCountItem label="총 에세이" value={countsData?.totalEssays} />
      <UserCountItem
        label="오늘 작성된 에세이"
        value={countsData?.todayEssays}
      />
      <UserCountItem
        label="발행된 에세이"
        value={countsData?.publishedEssays}
      />
      <UserCountItem
        label="링크드아웃 된 에세이"
        value={countsData?.linkedOutEssays}
      />
      <UserCountItem
        label="처리되지 않은 리포트"
        value={countsData?.unprocessedReports}
      />
      <UserCountItem
        label="처리되지 않은 리뷰"
        value={countsData?.unprocessedReviews}
      />
    </div>
  );
};

export default UserCount;

const UserCountItem = ({
  label,
  value = 0,
}: {
  label: string;
  value?: number;
}) => {
  return (
    <div>
      <div>{label}</div>
      <div>{value}</div>
    </div>
  );
};
