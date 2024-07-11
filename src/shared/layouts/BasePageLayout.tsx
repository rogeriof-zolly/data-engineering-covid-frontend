import { Grid, Typography } from "@mui/material";
import React from "react";
import BasicScatterPlot from "../components/BasicScatterPlot";
import BasicLineChart from "../components/BasicLineChart";
import { CardRow } from "../components/card-row/cardRow";
import useSWR from "swr";

interface IBasePageLayoutProps {
  children: React.ReactNode;
  title: string;
}

interface IDataDeaths {
  Date: string;
  Deaths: number;
}

interface IDataRecovered {
  Date: string;
  Recoveries: number;
}

interface IDataClusters {
  Cluster: number;
  meanDeathRate: number;
  meanNewRecoveries: number;
  meanVaccination: number;
}

const fetcher = (url: string) =>
  fetch("http://localhost:3000" + url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }).then((res) => res.json());

export const BasePageLayout: React.FC<IBasePageLayoutProps> = () => {
  const geral = useSWR("/covid/overall", fetcher);
  const preVacinacao = useSWR("/covid/pre-vaccination", fetcher);
  const posVacinacao = useSWR("/covid/post-vaccination", fetcher);

  const deathsTimeLine = useSWR("/covid/deaths/timeseries", fetcher);
  const recoveriesTimeLine = useSWR("/covid/recoveries/timeseries", fetcher);

  const clusters = useSWR("/clusters-data", fetcher);

  return (
    <Grid container xs justifyContent={"center"}>
      <Grid item xs={12}>
        <CardRow
          title="Geral"
          values={[
            {
              title: "Média de mortes diárias",
              value: geral.data?.meanDailyDeaths,
            },
            { title: "Taxa de mortalidade", value: geral.data?.meanDeathRate },
            {
              title: "Média de recuperações diárias",
              value: geral.data?.meanNewRecoveries,
            },
            {
              title: "Média de casos diários",
              value: geral.data?.meanDailyCases,
            },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <CardRow
          title="Pré-vacinação"
          values={[
            {
              title: "Média de mortes diárias",
              value: preVacinacao.data?.meanDailyDeaths,
            },
            {
              title: "Taxa de mortalidade",
              value: preVacinacao.data?.meanDeathRate,
            },
            {
              title: "Média de recuperações diárias",
              value: preVacinacao.data?.meanNewRecoveries,
            },
            {
              title: "Média de casos diários",
              value: preVacinacao.data?.meanDailyCases,
            },
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <CardRow
          title="Pós-vacinação"
          values={[
            {
              title: "Média de mortes diárias",
              value: posVacinacao.data?.meanDailyDeaths,
            },
            {
              title: "Taxa de mortalidade",
              value: posVacinacao.data?.meanDeathRate,
            },
            {
              title: "Média de recuperações diárias",
              value: posVacinacao.data?.meanNewRecoveries,
            },
            {
              title: "Média de casos diários",
              value: posVacinacao.data?.meanDailyCases,
            },
          ]}
        />
      </Grid>
      <Grid
        item
        container
        sx={{
          border: "1px solid #fff",
          margin: "42px",
        }}
        xs
      >
        <Grid container item flexDirection={"row"}>
          <Grid container xs={6} justifyContent={"center"} item>
            <BasicScatterPlot />
          </Grid>
          <Grid
            xs={6}
            container
            gap={2}
            marginTop={2}
            justifyContent={"center"}
          >
            {!clusters.isLoading &&
              clusters.data.map((item: IDataClusters) => (
                <Grid
                  container
                  direction={"column"}
                  xs={5}
                  sx={{
                    backgroundColor: "#fff",
                    padding: "10px",
                    direction: "column",
                    justifyItems: "center",
                    height: "150px",
                    borderRadius: "10px",
                  }}
                >
                  <Grid container item>
                    <Typography>Cluster: {item.Cluster}</Typography>
                  </Grid>
                  <Grid container item>
                    <Typography>
                      Média de taxa de morte: {item.meanDeathRate}
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Typography>
                      {" "}
                      Média de recuperações: {item.meanNewRecoveries}
                    </Typography>
                  </Grid>
                  <Grid container item>
                    <Typography>
                      {" "}
                      Média de vacinação: {item.meanVaccination}{" "}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid container xs={12} item direction={"row"}>
          <Grid container xs item justifyContent="center">
            {!deathsTimeLine.isLoading && (
              <BasicLineChart
                data={deathsTimeLine.data.map((v: IDataDeaths) => v.Deaths)}
                label={deathsTimeLine.data.map((v: IDataDeaths) => v.Date)}
                subtitle="Mortes totais"
              />
            )}
          </Grid>
          <Grid container xs item justifyContent="center">
            {!recoveriesTimeLine.isLoading && (
              <BasicLineChart
                data={recoveriesTimeLine.data.map(
                  (v: IDataRecovered) => v.Recoveries
                )}
                label={recoveriesTimeLine.data.map(
                  (v: IDataRecovered) => v.Date
                )}
                subtitle="Recuperações por dia"
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
