import { Datagrid, Filter, List, SelectInput, TextField } from "react-admin";

const QnaList = () => {
  return (
    <List filters={<QnaFilter />} sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="question" />
        <TextField source="answer" />
      </Datagrid>
    </List>
  );
};

export default QnaList;

const QnaFilter = (props: any) => (
  <Filter {...props}>
    <SelectInput
      label="응답 상태"
      source="isAnswered"
      choices={[{ id: "no", name: "응답 미완료" }]}
      alwaysOn
    />
  </Filter>
);
