import { Show, SimpleShowLayout, TextField } from "react-admin";

import CustomImageField from "../../@common/CustomImageField";

const ManagerShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" label="관리자 ID" />
        <TextField source="email" label="관리자 이메일" />
        <TextField source="name" label="관리자 이름" />
        <CustomImageField source="profileImage" label="프로필 이미지" />
        <TextField source="info" label="비고" />
      </SimpleShowLayout>
    </Show>
  );
};

export default ManagerShow;
