import { useRecordContext } from "react-admin";

const CustomContentField = ({ source }: { source: string; label: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return <div dangerouslySetInnerHTML={{ __html: record[source] }} />;
};

export default CustomContentField;
