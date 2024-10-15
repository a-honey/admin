import { useEffect, useState } from "react";

import getServerStatus from "../../../api/server/getServerStatus";

const ServerStatus = () => {
  const [isServerAvailable, setIsServerAbailable] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getServerStatus();

      if (res.data === "open") {
        setIsServerAbailable(true);
      }
    };

    fetchData();
  });
  return (
    <div title={isServerAvailable ? "서버 정상" : "서버 에러"}>
      {isServerAvailable ? "🟢" : "🔴"}
    </div>
  );
};

export default ServerStatus;
