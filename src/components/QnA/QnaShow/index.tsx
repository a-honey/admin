import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

import CustomContentField from "../../@common/CustomContentField";
import QnaAnswer from "./QnaAnwer";

const QnaShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="id" label="QnA ID" />
        <TextField source="title" label="QnA 제목" />
        <DateField
          source="createdDate"
          label="작성날짜"
          showTime
          locales="ko-KR"
        />
        <CustomContentField source="content" label="QnA 내용" />
      </SimpleShowLayout>
      <QnaAnswer />
    </Show>
  );
};

export default QnaShow;
