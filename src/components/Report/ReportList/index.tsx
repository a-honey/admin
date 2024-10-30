import { Datagrid, DateField, List, TextField } from "react-admin";

const ReportList = () => {
  return (
    <List sx={{ marginTop: 3 }} perPage={20}>
      <Datagrid>
        <TextField source="id" label="에세이 ID" />
        <TextField source="essayTitle" label="에세이 제목" />
        <TextField source="reportCount" label="신고 수" />
        <DateField
          source="oldestReportDate"
          label="레포트 날짜"
          showTime
          locales="ko-KR"
        />
      </Datagrid>
    </List>
  );
};

export default ReportList;
