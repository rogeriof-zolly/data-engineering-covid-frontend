import { BarChart } from "@mui/x-charts";

interface basicBarChartProps {
  barColors: string[];
  xAxisData: number[];
  xAxisLabels: string[];
}

const BasicBarChart = ({
  barColors,
  xAxisLabels,
  xAxisData,
}: basicBarChartProps) => {
  return (
    <BarChart
      xAxis={[
        {
          id: "barCategories",
          data: xAxisLabels,
          scaleType: "band",
        },
      ]}
      series={[
        {
          data: xAxisData,
        },
      ]}
      colors={barColors}
      width={400}
      height={300}
    ></BarChart>
  );
};

export default BasicBarChart;
