import { ManagerType } from "../../Manager";
import getWaitingManagers from "../../../services/managers/getWaitingManagers";
import updateManagerStatus from "../../../services/managers/updateManagerStatus";
import { useQuery } from "@tanstack/react-query";

const WaitingManagers = () => {
  const { data: managers } = useQuery({
    queryFn: () => {
      return getWaitingManagers();
    },
    queryKey: ["analysis", "counts"],
  });

  return (
    <div>
      <div>대기중인 관리자 계정</div>
      <div>
        {managers?.map((el) => <WaitingManagerItem key={el.id} {...el} />)}
      </div>
    </div>
  );
};

export default WaitingManagers;

const WaitingManagerItem = ({ id, name }: ManagerType) => {
  const handleStatusChangeClick = () => {
    updateManagerStatus(id, true);
  };

  return (
    <div>
      <div>{name}</div>
      <button
        onClick={() => {
          handleStatusChangeClick();
        }}
      >
        수락
      </button>
    </div>
  );
};
