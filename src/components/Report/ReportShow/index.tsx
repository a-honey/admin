import {
  DateField,
  Show,
  SimpleShowLayout,
  TextField,
  useRecordContext,
} from "react-admin";

import CustomContentField from "../../@common/CustomContentField";
import MoveToShow from "../../@common/MoveToShow";
import ReportItem from "./ReportItem";
import { ReportItemType } from "..";
import { join } from "path";
import { useState } from "react";

const ReportShow = (props: any) => {
  const [isOpenEssayContent, setIsOpenEssayContent] = useState(false);
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <SimpleShowLayout
          direction="row"
          width={540}
          justifyContent="space-between"
        >
          <TextField source="authorId" label="작성자 ID" />
          <TextField source="author.nickname" label="작성자 닉네임" />
          <TextField source="author.email" label="작성자 이메일" />
        </SimpleShowLayout>
        <SimpleShowLayout
          direction="row"
          width={800}
          justifyContent="space-between"
        >
          <MoveToShow getHref={(id) => `/#/essays/${id}/show`} source="id">
            <TextField source="title" label="에세이 제목" />
            <TextField source="views" label="에세이 조회수" />
            <DateField
              source="createdDate"
              label="에세이 작성날짜"
              showTime
              locales="ko-KR"
            />
          </MoveToShow>
        </SimpleShowLayout>
        <SimpleShowLayout>
          <CustomContentField
            source={isOpenEssayContent ? "content" : undefined}
            label="에세이 내용"
          />
          <button
            onClick={() => {
              setIsOpenEssayContent((prev) => !prev);
            }}
          >
            {isOpenEssayContent
              ? "에세이 내용 닫기"
              : "에세이 내용 자세히 보기"}
          </button>
        </SimpleShowLayout>
        <SimpleShowLayout>
          <ReportList />
        </SimpleShowLayout>
      </SimpleShowLayout>
    </Show>
  );
};

export default ReportShow;

const ReportList = () => {
  const record = useRecordContext();
  const data = record ? record["reports"] : undefined;
  return (
    <div>
      {data?.map((el: ReportItemType) => (
        <ReportItem ReportItem key={el.id} {...el} />
      ))}
    </div>
  );
};
