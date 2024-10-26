import { useEffect, useState } from "react";

import ChartGroup from "./ChartGroup";
import UserCount from "./UserCount";
import getGraphData from "../../services/analysis/getGraphData";

const Dashboard = () => {
  const [data, setData] = useState<any>();

  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();

  useEffect(() => {
    const fetch = async () => {
      const res = await getGraphData();
      setData(res);
    };
    fetch();
  }, []);

  if (!data) return <></>;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "start",
        flexDirection: "row",
        marginTop: "30px",
        gap: "0px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr 1fr",
          gridTemplateColumns: "1fr 1fr",
          width: "60%",
        }}
      >
        <ChartGroup
          label={`${month}월 에세이 작성 수`}
          data={data?.essays.daily}
        />
        <ChartGroup
          label={`${year}년 에세이 작성 수`}
          data={data?.essays.monthly}
        />
        <ChartGroup
          label={`${month}월 유저 가입 수`}
          data={data?.users.daily}
        />
        <ChartGroup
          label={`${year}년 유저 가입 수`}
          data={data?.users.monthly}
        />
        <ChartGroup
          label={`${month}월 구독 가입 수`}
          data={data?.payments.daily}
        />
        <ChartGroup
          label={`${year}년 구독 가입 수`}
          data={data?.payments.monthly}
        />
      </div>{" "}
      <UserCount />
    </div>
  );
};

export default Dashboard;
