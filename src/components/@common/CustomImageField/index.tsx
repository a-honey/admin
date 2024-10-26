import { useRecordContext } from "react-admin";

const CustomImageField = ({
  source,
  label,
  width = "100px",
  height = "100px",
}: {
  width?: string;
  height?: string;
  source: string;
  label?: string;
}) => {
  const record = useRecordContext();
  if (!record) return null;

  return record && record[source] ? (
    <img src={record[source]} alt={label} style={{ width, height }} />
  ) : null;
};

export default CustomImageField;
