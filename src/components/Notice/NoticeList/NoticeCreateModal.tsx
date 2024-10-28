import "react-quill/dist/quill.snow.css";

import {
  Create,
  SimpleForm,
  TextInput,
  useNotify,
  useRefresh,
} from "react-admin";

import { Modal } from "@mui/material";
import ReactQuill from "react-quill";
import postNotice from "../../../services/notices/postNotice";
import { useState } from "react";

type NoticeType = {
  title: string;
  content: string;
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
  const [content, setContent] = useState("");

  const handleSave = (data: any) => {
    const noticeData = data as NoticeType;
    postNotice(noticeData);
    notify("공지사항이 작성되었습니다!");
    refresh();
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: 20, width: "1000px", height: "800px" }}>
        <Create sx={{ width: "100%" }}>
          <SimpleForm
            defaultValue={["content"]}
            onSubmit={handleSave}
            validate={validateUserCreation}
          >
            <h2>공지사항 작성하기</h2>
            <TextInput
              source="title"
              label="제목"
              required
              sx={{ width: "100%" }}
            />
            <ReactQuill
              value={content}
              onChange={setContent}
              theme="snow"
              style={{
                width: "100%",
                height: "400px",
              }}
            />
          </SimpleForm>
        </Create>
      </div>
    </Modal>
  );
};

export default NoticeCreateModal;

const validateUserCreation = (values: any) => {
  const errors: Partial<NoticeType> = {};

  if (!values.title) {
    errors.title = "공지사항 제목을 입력해주세요.";
  }
  if (!values.content) {
    errors.content = "내용을 입력해주세요.";
  }
  return errors;
};
