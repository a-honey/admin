import {
  Datagrid,
  Filter,
  List,
  SelectInput,
  TextField,
  TextInput,
  useRecordContext,
} from "react-admin";

const ManagerLogFilters = () => (
  <Filter>
    <SelectInput
      label="타겟"
      source="target"
      choices={[
        { id: "report", name: "레포트" },
        { id: "review", name: "리뷰" },
        { id: "essay", name: "에세이" },
        { id: "user", name: "사용자" },
      ]}
      alwaysOn
    />
    <SelectInput
      label="액션"
      source="action"
      choices={[
        { id: "approved", name: "승인함" },
        { id: "rejected", name: "거절함" },
        { id: "pending", name: "보류 중" },
        { id: "unpublished", name: "비공개함" },
        { id: "unlinkedout", name: "링크드아웃 취소함" },
        { id: "deleted", name: "삭제함" },
      ]}
      alwaysOn
    />
  </Filter>
);

const ManagerLogList = () => {
  return (
    <List filters={<ManagerLogFilters />} sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" label="로그 ID" />
        <LogField label="활동 내용" />
        <TextField source="processor.name" label="진행자명" />
        <TextField source="comment" label="비고" />
      </Datagrid>
    </List>
  );
};

export default ManagerLogList;

const LogField = ({ label }: { label: string }) => {
  const record = useRecordContext();
  if (!record) return null;

  const target = getTarget(record["target"]);
  const action = getAction(record["actionType"]);

  return (
    <div>
      {target}(을)를 {action}
    </div>
  );
};

function getTarget(target: string) {
  switch (target) {
    case "report":
      return "레포트";
    case "review":
      return "리뷰";
    case "essay":
      return "에세이";
    case "user":
      return "사용자";
    default:
      return target;
  }
}

function getAction(action: string) {
  switch (action) {
    case "approved":
      return "승인함";
    case "rejected":
      return "거절함";
    case "unpublished":
      return "비공개함";
    case "unlinkedout":
      return "링크드아웃 취소함";
    case "deleted":
      return "삭제함";
    default:
      return action;
  }
}
