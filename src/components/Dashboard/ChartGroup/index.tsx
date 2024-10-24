import MonthlyChart from "../../@common/MothlyChart";
import YearChart from "../../@common/YearChart";

const ChartGroup = ({
  label,
  data,
}: {
  label: string;
  data: { [key: string]: number };
}) => {
  const hasAnnualData = Object.prototype.hasOwnProperty.call(data, "30");
  return (
    <div>
      <label>{label}</label>
      {hasAnnualData ? <MonthlyChart data={data} /> : <YearChart data={data} />}
    </div>
  );
};

export default ChartGroup;
