import { Datagrid, DateField, Link, List, TextField } from "react-admin";

import { useRecordContext } from "react-admin";

const CustomTitleField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return <Link to={`?id=${record["id"]}`}>{record[source]}</Link>;
};

export const EssayList = () => (
  <List sx={{ marginTop: 3 }} perPage={20}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="author" />
      <CustomTitleField source="title" />
      <DateField
        source="createdDate"
        label="작성날짜"
        showTime
        locales="ko-KR"
      />
    </Datagrid>
  </List>
);

export default EssayList;
