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
import getVersion, { VersionType } from "../../services/version/getVersion";

import updateVersion from "../../services/version/updateVersion";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const Version = () => {
  const { data } = useQuery({ queryFn: getVersion, queryKey: ["version"] });

  if (!data) return;
  return (
    <div
      style={{
        display: "grid",
        columnGap: "200px",
        rowGap: "50px",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1f 1f 1fr",
        marginTop: "40px",
      }}
    >
      {data.map((el) => (
        <VersionItem key={el.id} {...el} />
      ))}
    </div>
  );
};

export default Version;

const VersionItem = ({ id, appType, version, releaseDate }: VersionType) => {
  const [isOpenChangeModal, setOpenChangeModal] = useState(false);

  const type = changeAppTypeLabel(appType);

  return (
    <>
      <ChangeVersionCreateModal
        isOpen={isOpenChangeModal}
        type={type}
        id={id}
        onClose={() => setOpenChangeModal(false)}
      />
      <div style={{ position: "relative" }}>
        <ListItem label="타입" value={type} />
        <ListItem label="버전" value={version} />
        <ListItem label="출시일" value={formattedDate(releaseDate)} />
        <button
          style={{ position: "absolute", top: 0, right: 0 }}
          onClick={() => setOpenChangeModal(true)}
        >
          변경
        </button>
      </div>
    </>
  );
};

const ListItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "60px" }}>{label}</div>
      <div style={{ marginRight: "15px" }}>|</div>
      <div>{value}</div>
    </div>
  );
};
const ChangeVersionCreateModal = ({
  isOpen,
  onClose,
  id,
  type,
}: {
  id: number;
  type: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const notify = useNotify();
  const refresh = useRefresh();

  const handleSave = (data: any) => {
    updateVersion(id, data.content);
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
        <Create>
          <SimpleForm onSubmit={handleSave} sx={{ padding: "20px" }}>
            <h4>{type} 버전 변경하기</h4>
            <TextInput
              source="content"
              label="변경할 버전을 입력해주세요"
              multiline
              required
            />
            <Button type="submit" variant="contained">
              저장
            </Button>
          </SimpleForm>
        </Create>
      </div>
    </Modal>
  );
};

function changeAppTypeLabel(appType: string) {
  switch (appType) {
    case "android_tablet":
      return "안드로이드(태블릿)";
    case "android_mobile":
      return "안드로이드(모바일)";
    case "ios_mobile":
      return "아이폰(모바일)";
    case "ios_tablet":
      return "아이폰(태블릿)";
    case "desktop_mac":
      return "데스크탑(Mac)";
    case "desktop_windows":
      return "데스크탑(Window)";
    default:
      return appType;
  }
}

function formattedDate(argDate: Date | string, joiner?: string) {
  const date = new Date(argDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  if (joiner) {
    return `${year}${joiner}${month}${joiner}${day}`;
  }

  return `${year}년 ${month}월 ${day}일`;
}
