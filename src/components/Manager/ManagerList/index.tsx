import { Datagrid, EmailField, List, TextField } from "react-admin";

import Chip from "../../@common/Chip";
import CustomField from "../../@common/CustomField";

const ManagerList = () => {
  return (
    <List sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" label="관리자 ID" />
        <TextField source="name" label="관리자 닉네임" />
        <EmailField source="email" label="관리자 이메일" />
        <CustomField source="activated" label="관리자 상태">
          {(data) => <Chip text={data ? "활성화" : "비활성화"} />}
        </CustomField>
      </Datagrid>
    </List>
  );
};

export default ManagerList;
