import { SimpleShowLayout, TextField } from "react-admin";

const QnaAnswer = () => {
  return (
    <SimpleShowLayout>
      <div>문의 답변하기</div>
      <TextField source="title" label="QnA 제목" />
      <textarea />
    </SimpleShowLayout>
  );
};

export default QnaAnswer;
