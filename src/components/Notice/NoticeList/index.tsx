import { Datagrid, List, TextField, TopToolbar } from "react-admin";

import { Button } from "@mui/material";
import NoticeCreateModal from "./NoticeCreateModal";
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
