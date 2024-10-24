import {
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

import CustomContentField from "../../@common/CustomContentField";
import { EssayStatusType } from "..";
import updateEssayStatus from "../../../services/essays/updateEssayStatus";
import { useState } from "react";

const EssayShow = (props: any) => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <SimpleShowLayout
          direction="row"
          width={400}
          justifyContent="space-between"
        >
          <TextField source="id" label="에세이 ID" />
          <TextField source="author.nickname" label="작성자 닉네임" />
        </SimpleShowLayout>
        <SimpleShowLayout
          direction="row"
          width={800}
          justifyContent="space-between"
        >
          <CustomStatusField source="status" label="상태" />
          <TextField source="views" label="조회수" />
          <TextField source="reportCount" label="리포트 수" />
          <TextField source="reviewCount" label="리뷰 수" />
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
        <CustomContentField source="content" label="에세이 내용" />
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
      <TextField {...props} />
      <button
        onClick={() => {
          setIsOpenBox((prev) => !prev);
        }}
      >
        {isOpenBox ? "취소" : "변경"}
      </button>
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
