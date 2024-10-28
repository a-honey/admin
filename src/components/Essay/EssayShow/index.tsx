import {
  DateField,
  DeleteButton,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

import Chip from "../../@common/Chip";
import CustomContentField from "../../@common/CustomContentField";
import CustomField from "../../@common/CustomField";
import { EssayStatusType } from "..";
import ListBox from "./ListBox";
import { getEssayStatusLabel } from "../index.utils";
import updateEssayStatus from "../../../services/essays/updateEssayStatus";
import { useState } from "react";

const EssayShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <SimpleShowLayout
          direction="row"
          width={540}
          justifyContent="space-between"
        >
          <TextField source="author.id" label="작성자 ID" />
          <TextField source="author.nickname" label="작성자 닉네임" />
          <TextField source="author.email" label="작성자 이메일" />
        </SimpleShowLayout>
        <SimpleShowLayout
          direction="row"
          width={800}
          justifyContent="space-between"
        >
          {" "}
          <TextField source="id" label="에세이 ID" />
          <CustomStatusField source="status" label="상태" />
          <TextField source="views" label="조회수" />
          <CustomField source="reports" label="리포트 수">
            {(data) => <Chip text={data.length} />}
          </CustomField>
          <CustomField source="reviews" label="리뷰 수">
            {(data) => <Chip text={data.length} />}
          </CustomField>
        </SimpleShowLayout>
        <SimpleShowLayout
          direction="row"
          width={800}
          justifyContent="space-between"
        >
          <TextField source="title" label="에세이 제목" />
          <DateField
            source="createdDate"
            label="가입날짜"
            showTime
            locales="ko-KR"
          />
        </SimpleShowLayout>
        <SimpleShowLayout>
          <CustomContentField source="content" label="에세이 내용" />
          <DeleteButton />
        </SimpleShowLayout>
        <SimpleShowLayout>
          <hr />
          <ListBox source="story" label="스토리 목록" />
          <ListBox source="reviews" label="리뷰 목록" />
          <ListBox source="reports" label="레포트 목록" />
        </SimpleShowLayout>
      </SimpleShowLayout>
    </Show>
  );
};

export default EssayShow;

const CustomStatusField = ({
  ...props
}: {
  source: string;
  label?: string;
}) => {
  const [isOpenBox, setIsOpenBox] = useState(false);

  const record = useRecordContext();

  if (!record || !record.id) return null;

  const handleStatusClick = (status: EssayStatusType) => {
    updateEssayStatus(record.id as number, status);
    setIsOpenBox(false);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px" }}>
        <CustomField source="status" label="에세이 상태">
          {(data) => <Chip text={getEssayStatusLabel(data)} />}
        </CustomField>
        <button
          onClick={() => {
            setIsOpenBox((prev) => !prev);
          }}
        >
          {isOpenBox ? "취소" : "변경"}
        </button>
      </div>
      {isOpenBox && (
        <div>
          <button
            onClick={() => {
              handleStatusClick("published");
            }}
          >
            공개
          </button>
          <button
            onClick={() => {
              handleStatusClick("linkedout");
            }}
          >
            링크드아웃
          </button>
          <button
            onClick={() => {
              handleStatusClick("private");
            }}
          >
            비공개
          </button>
        </div>
      )}
    </div>
  );
};
