import { useRecordContext } from "react-admin";

const ListBox = ({ source }: { source: string; label: string }) => {
  const record = useRecordContext();
  const data = record ? record[source] : undefined;

  if (!data) return null;
  if (!Array.isArray(data)) return <div>{data}</div>;

  return (
    <div>
      <div>
        {data.map((el, index) => (
          <div key={index}>{el}</div>
        ))}
      </div>
    </div>
  );
};

export default ListBox;
