import { useRecordContext } from "react-admin";

const CustomField = ({
  children,
  source,
}: {
  children: (data: any) => React.ReactNode;
  source: string;
  label: string;
}) => {
  const record = useRecordContext();
  if (!record) return null;

  console.log(record["activated"]);
  return <>{children(record[source])}</>;
};

export default CustomField;
