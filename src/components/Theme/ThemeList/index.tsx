import { Datagrid, EmailField, List, TextField } from "react-admin";

const ThemeList = () => {
  return (
    <List sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" />
        <EmailField source="name" label="이름" />
      </Datagrid>
    </List>
  );
};

export default ThemeList;
