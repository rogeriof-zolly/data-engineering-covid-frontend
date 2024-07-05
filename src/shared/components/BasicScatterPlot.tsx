import { ScatterChart } from "@mui/x-charts";
import axios from "axios";
import { useEffect, useState } from "react";

interface IData {
  Cluster: number;
  PCA1: number;
  PCA2: number;
}

const BasicScatterPlot = () => {
  const [data, setData] = useState<IData[]>([]);

  useEffect(() => {
    // Replace with your API endpoint
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/clusters", {
          headers: { "Access-Control-Allow-Origin": "*" },
        });
        console.log("response", response);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <ScatterChart
      width={600}
      height={300}
      series={[
        {
          label: "Cluster 0",
          data: data
            .filter((v) => v.Cluster === 0)
            .map((v) => ({ x: v.PCA1, y: v.PCA2, id: v.Cluster })),
        },
        {
          label: "Cluster 1",
          data: data
            .filter((v) => v.Cluster === 1)
            .map((v) => ({ x: v.PCA1, y: v.PCA2, id: v.Cluster })),
        },
        {
          label: "Cluster 2",
          data: data
            .filter((v) => v.Cluster === 2)
            .map((v) => ({ x: v.PCA1, y: v.PCA2, id: v.Cluster })),
        },
      ]}
    ></ScatterChart>
  );
};

export default BasicScatterPlot;
