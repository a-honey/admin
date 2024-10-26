import { Button, Modal } from "@mui/material";
import {
  Create,
  Datagrid,
  List,
  SimpleForm,
  TextField,
  TextInput,
  TopToolbar,
  useNotify,
  useRedirect,
  useRefresh,
} from "react-admin";

import postNotice from "../../../services/notices/postNotice";
import { useState } from "react";

export const NoticeList = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TopToolbar sx={{ marginTop: "30px", marginRight: "100px" }}>
        <Button onClick={() => setModalOpen(true)} variant="contained">
          공지사항 작성하기
        </Button>
      </TopToolbar>
      <NoticeCreateModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      <List sx={{ marginTop: 3 }} perPage={20}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <TextField source="description" />
        </Datagrid>
      </List>
    </>
  );
};

const NoticeCreateModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const notify = useNotify();
  const refresh = useRefresh();

  const handleSave = (data: any) => {
    postNotice(data);
    notify("공지사항이 작성되었습니다!");
    refresh();
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <div style={{ padding: 20 }}>
        <h2>공지사항 작성하기</h2>
        <Create>
          <SimpleForm onSubmit={handleSave}>
            <TextInput source="title" label="제목" required />
            <TextInput source="content" label="내용" multiline required />
            <Button type="submit" variant="contained">
              저장
            </Button>
          </SimpleForm>
        </Create>
      </div>
    </Modal>
  );
};
