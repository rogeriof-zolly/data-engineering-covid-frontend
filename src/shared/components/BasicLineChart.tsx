import { LineChart } from "@mui/x-charts";

interface BasicLineChartProps {
  data: number[];
  label: string[];
  subtitle?: string;
}

const BasicLineChart: React.FC<BasicLineChartProps> = ({
  data,
  label,
  subtitle,
}) => {
  return (
    <LineChart
      width={600}
      height={350}
      series={[{ data, label: subtitle }]}
      xAxis={[{ scaleType: "point", data: label }]}
    />
  );
};

export default BasicLineChart;
