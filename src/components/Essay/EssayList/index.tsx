import {
  Datagrid,
  DateField,
  Link,
  List,
  TextField,
  TextFieldProps,
} from "react-admin";

import Chip from "../../@common/Chip";
import CustomField from "../../@common/CustomField";
import { getEssayStatusLabel } from "../index.utils";
import { useRecordContext } from "react-admin";

const CustomTitleField = ({ source }: TextFieldProps) => {
  const record = useRecordContext();
  if (!record) return null;
  return <Link to={`?id=${record["id"]}`}>{record[source]}</Link>;
};

export const EssayList = () => (
  <List sx={{ marginTop: 3 }} perPage={20}>
    <Datagrid>
      <TextField source="id" label="에세이 ID" />
      <TextField source="author.nickname" label="에세이 작성자" />
      <CustomTitleField source="title" label="에세이 제목" />
      <CustomField source="status" label="에세이 상태">
        {(data) => <Chip text={getEssayStatusLabel(data)} />}
      </CustomField>
      <DateField
        source="createdDate"
        label="에세이 작성날짜"
        showTime
        locales="ko-KR"
      />
    </Datagrid>
  </List>
);

export default EssayList;
