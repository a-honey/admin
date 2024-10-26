import { Box, Divider, Grid2 as Grid } from "@mui/material";
import { Show, SimpleShowLayout, TextField } from "react-admin";
import { useDelete, useRecordContext } from "react-admin";

import CustomImageField from "../../@common/CustomImageField";

const UserShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout direction="row">
        <SimpleShowLayout direction="column" width={400}>
          <TextField source="id" label="사용자 ID" />
          <TextField source="email" label="사용자 이메일" />
          <TextField source="nickname" label="사용자 닉네임" />
          <TextField source="gender" label="성별" />
          <CustomImageField source="profileImage" label="프로필 이미지" />
          <TextField source="birthDate" label="생년월일" />
          <TextField source="platform" label="플랫폼" />
          <TextField source="platformId" label="플랫폼 ID" />
        </SimpleShowLayout>
        <SimpleShowLayout direction="column">
          <TextField source="status" label="계정 상태" />
          <TextField source="reputation" label="평판" />
          <TextField source="subscriptionEnd" label="구독 종료일" />
          <TextField source="createdDate" label="계정 생성 날짜" />
          <TextField source="updatedDate" label="계정 수정 날짜" />
          <TextField source="deactivationDate" label="계정 비활성화 날짜" />
          <TextField source="deletedDate" label="계정 삭제 날짜" />
          <DeleteButton />
        </SimpleShowLayout>
      </SimpleShowLayout>
    </Show>
  );
};

export default UserShow;

const DeleteButton = () => {
  const record = useRecordContext();
  const [deleteOne, { isPending, error }] = useDelete();
  const handleClick = () => {
    deleteOne("users", { id: record?.id, previousData: record });
  };
  if (error) {
    return <p>ERROR</p>;
  }
  return (
    <button disabled={isPending} onClick={handleClick}>
      Delete
    </button>
  );
};
