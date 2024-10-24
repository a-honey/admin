import getMyInfo from "../../services/auth/getMyInfo";
import { useQuery } from "@tanstack/react-query";

const MyPage = () => {
  const { data } = useQuery({
    queryFn: () => {
      return getMyInfo();
    },
    queryKey: ["d"],
  });
  console.log("did", data);
  return <div>dfdkfjdkfj</div>;
};

export default MyPage;
