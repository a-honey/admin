import { Datagrid, List, TextField } from "react-admin";

export const EssayList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="author" />
      <TextField source="title" />
    </Datagrid>
  </List>
);

export default EssayList;
