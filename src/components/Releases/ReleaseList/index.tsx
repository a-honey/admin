import { Datagrid, EmailField, List, TextField } from "react-admin";

const ReleaseList = () => {
  return (
    <List sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="content" label="내용" />
        <EmailField source="processor.name" label="이름" />
      </Datagrid>
    </List>
  );
};

export default ReleaseList;
