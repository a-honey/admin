import { Datagrid, EmailField, List, TextField } from "react-admin";

const ManagerList = () => {
  return (
    <List sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" label="닉네임" />
        <EmailField source="email" label="이메일" />
      </Datagrid>
    </List>
  );
};

export default ManagerList;
