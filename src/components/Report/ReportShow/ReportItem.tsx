const ReportItem = ({ reporterId, createdDate, reason }: any) => {
  return (
    <div>
      <div>신고자 ID: {reporterId}</div>
      <div>신고 날짜: {createdDate}</div>
      <div>사유: {reason}</div>
    </div>
  );
};

export default ReportItem;
