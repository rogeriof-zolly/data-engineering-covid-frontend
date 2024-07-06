import { ScatterChart } from "@mui/x-charts";
import useSWR from "swr";

interface IData {
  Cluster: number;
  PCA1: number;
  PCA2: number;
}
const fetcher = (url: string) => fetch("http://localhost:3000" + url, {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}).then(res => res.json())

const BasicScatterPlot = () => {
  const data = useSWR("/clusters", fetcher);

  return (
    (!data.isLoading) &&
    <ScatterChart
      width={600}
      height={300}
      series={[
        {
          label: "Cluster 0",
          data: data.data
            .filter((v: IData) => v.Cluster === 0)
            .map((v: IData) => ({ x: v.PCA1, y: v.PCA2, id: v.Cluster })),
        },
        {
          label: "Cluster 1",
          data: data.data
            .filter((v: IData) => v.Cluster === 1)
            .map((v: IData) => ({ x: v.PCA1, y: v.PCA2, id: v.Cluster })),
        },
        {
          label: "Cluster 2",
          data: data.data
            .filter((v: IData) => v.Cluster === 2)
            .map((v: IData) => ({ x: v.PCA1, y: v.PCA2, id: v.Cluster })),
        },
      ]}
    ></ScatterChart>
  );
};

export default BasicScatterPlot;
