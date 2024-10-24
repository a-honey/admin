import { Show, SimpleShowLayout, TextField } from "react-admin";

import CustomContentField from "../../@common/CustomContentField";

const EssayShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" label="에세이 ID" />
        <TextField source="author.nickname" label="작성자 닉네임" />
        <TextField source="title" label="에세이 제목" />
        <CustomContentField source="content" label="에세이 내용" />
      </SimpleShowLayout>
    </Show>
  );
};

export default EssayShow;
