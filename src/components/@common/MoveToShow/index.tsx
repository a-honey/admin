import { useRecordContext } from "react-admin";

type MoveToShowProps = {
  children: React.ReactNode;
  getHref: (source: string) => string;
  source: string;
};

const MoveToShow = ({ children, getHref, source }: MoveToShowProps) => {
  const record = useRecordContext();
  const data = record ? record[source] : undefined;

  return <a href={getHref(data)}>{children}</a>;
};

export default MoveToShow;
