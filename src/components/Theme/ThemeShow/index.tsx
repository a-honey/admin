import { Show, SimpleShowLayout, TextField } from "react-admin";

import CustomImageField from "../../@common/CustomImageField";

const ThemeShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField source="name" label="테마 이름" />
        <TextField source="price" label="테마 가격" />
        <CustomImageField
          source="url"
          label="테마 이미지"
          width="300px"
          height="500px"
        />
      </SimpleShowLayout>
    </Show>
  );
};

export default ThemeShow;
