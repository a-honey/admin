import { Datagrid, EmailField, List, TextField } from "react-admin";

const UserList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="nickname" label="닉네임" />
        <EmailField source="email" label="이메일" />
        <TextField source="createdDate" label="가입날짜" />
        <TextField source="platform" label="SNS 유형" />
      </Datagrid>
    </List>
  );
};

export default UserList;
