import { Datagrid, EmailField, List, TextField } from "react-admin";

export const EssayList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="author" />
      <TextField source="content" />
    </Datagrid>
  </List>
);

export default EssayList;
