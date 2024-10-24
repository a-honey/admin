import { useRecordContext } from "react-admin";

const CustomImageField = ({
  source,
  label,
}: {
  source: string;
  label?: string;
}) => {
  const record = useRecordContext();
  if (!record) return null;

  return record && record[source] ? (
    <img src={record[source]} alt={label} style={{ width: 100, height: 100 }} />
  ) : null;
};

export default CustomImageField;
