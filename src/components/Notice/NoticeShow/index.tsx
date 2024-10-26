import {
  DateField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

import CustomContentField from "../../@common/CustomContentField";

const NoticeShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" label="공지사항 ID" />
        <TextField source="title" label="공지사항 제목" />
        <DateField
          source="createdDate"
          label="작성날짜"
          showTime
          locales="ko-KR"
        />
        <CustomContentField source="content" label="공지사항 내용" />
        <DeleteButton resource="notices" />
      </SimpleShowLayout>
    </Show>
  );
};

export default NoticeShow;
