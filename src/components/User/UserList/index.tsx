import {
  Datagrid,
  DateField,
  EmailField,
  Filter,
  List,
  TextField,
} from "react-admin";

import { TextInput } from "react-admin";

const UserList = (props: any) => {
  return (
    <List {...props} filters={<SearchFilter />}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="nickname" label="닉네임" />
        <EmailField source="email" label="이메일" />
        <DateField
          source="createdDate"
          label="가입날짜"
          showTime
          locales="ko-KR"
        />
        <TextField source="platform" label="SNS 유형" />
      </Datagrid>
    </List>
  );
};

export default UserList;
const SearchFilter = (props: any) => {
  return (
    <Filter {...props}>
      <TextInput label="사용자 이메일 검색" source="email" alwaysOn />
    </Filter>
  );
};
