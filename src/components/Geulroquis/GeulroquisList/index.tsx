import { Button, Modal } from "@mui/material";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import {
  Create,
  Datagrid,
  FileInput,
  SimpleForm,
  TextField,
  TextInput,
  TopToolbar,
  useNotify,
  useRedirect,
  useRefresh,
} from "react-admin";
import { List, ListPaginationContext, useGetList } from "react-admin";

import postGeulroquis from "../../../services/geulroquis/postGeulroquis";

const GeulroquisList = () => {
  const [isOpenUploadModal, setIsOpenUploadModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, total } = useGetList("geulroquis", {
    pagination: { page: currentPage, perPage: 9 },
  });

  if (error || !total) return <p>오류 발생: {error?.message}</p>;

  const handlePageChange = (event: any, newPage: any) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <TopToolbar sx={{ marginTop: "30px", marginRight: "100px" }}>
        <Button onClick={() => setIsOpenUploadModal(true)} variant="contained">
          글로키 업로드
        </Button>
      </TopToolbar>
      <NoticeCreateModal
        isOpen={isOpenUploadModal}
        onClose={() => setIsOpenUploadModal(false)}
      />
      <List
        sx={{ marginLeft: "100px", marginRight: "300px" }}
        pagination={false}
      >
        <Grid container spacing={2}>
          {data &&
            data.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card>
                  <CardMedia
                    component="img"
                    width="100"
                    height="200"
                    image={item.url}
                    alt={item.name}
                  />
                </Card>
              </Grid>
            ))}
        </Grid>
        <Pagination
          count={Math.ceil(total / 9)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}
        />
      </List>
    </>
  );
};

export default GeulroquisList;

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
    const formData = new FormData();
    formData.append("images", data);
    postGeulroquis(formData);
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
      <div style={{ padding: 20, width: "500px" }}>
        <h2>공지사항 작성하기</h2>
        <Create>
          <SimpleForm onSubmit={handleSave}>
            <FileInput source="image" label="글로키 업로드" />
            <Button type="submit" variant="contained">
              저장
            </Button>
          </SimpleForm>
        </Create>
      </div>
    </Modal>
  );
};
