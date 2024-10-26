import { Datagrid, List, TextField } from "react-admin";

const QnaList = () => {
  return (
    <List sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="question" />
        <TextField source="answer" />
      </Datagrid>
    </List>
  );
};

export default QnaList;
