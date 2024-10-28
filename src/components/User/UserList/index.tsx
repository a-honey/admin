import {
  Datagrid,
  DateField,
  EmailField,
  Filter,
  List,
  TextField,
} from "react-admin";

import Chip from "../../@common/Chip";
import CustomField from "../../@common/CustomField";
import { TextInput } from "react-admin";

const UserList = (props: any) => {
  return (
    <List
      {...props}
      filters={<SearchFilter />}
      sx={{ marginTop: 3 }}
      perPage={20}
    >
      <Datagrid>
        <TextField source="id" label="사용자 ID" />
        <TextField source="nickname" label="사용자 닉네임" />
        <EmailField source="email" label="사용자 이메일" />
        <CustomField source="status" label="사용자 상태">
          {(data) => <Chip text={data} />}
        </CustomField>
        <DateField
          source="createdDate"
          label="사용자 가입날짜"
          showTime
          locales="ko-KR"
        />
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
