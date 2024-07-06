import { Grid } from "@mui/material";
import React from "react";
import BasicScatterPlot from "../components/BasicScatterPlot";
import { CardRow } from "../components/card-row/cardRow";
import useSWR from "swr";

interface IBasePageLayoutProps {
  children: React.ReactNode;
  title: string;
}
const fetcher = (url: string) => fetch("http://localhost:3000" + url, {
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}).then(res => res.json())

export const BasePageLayout: React.FC<IBasePageLayoutProps> = () => {

  const geral = useSWR("/covid/overall", fetcher);
  const preVacinacao = useSWR("/covid/pre-vaccination", fetcher);
  const posVacinacao = useSWR("/covid/post-vaccination", fetcher);

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12}>
        <CardRow title="Geral" values={[
          {title: "Taxa de mortalidade", value: geral.data?.meanDailyDeaths},
          {title: "Taxa de recuperação", value: geral.data?.meanDeathRate},
          {title: "Média de mortes diárias", value: geral.data?.meanNewRecoveries}
        ]}/>
      </Grid>
      <Grid item xs={12}>
        <CardRow title="Pré-vacinação" values={[
          {title: "Taxa de mortalidade", value: preVacinacao.data?.meanDailyDeaths},
          {title: "Taxa de recuperação", value: preVacinacao.data?.meanDeathRate},
          {title: "Média de mortes diárias", value: preVacinacao.data?.meanNewRecoveries}
        ]}/>
      </Grid>
      <Grid item xs={12}>
        <CardRow title="Pós-vacinação" values={[
          {title: "Taxa de mortalidade", value: posVacinacao.data?.meanDailyDeaths},
          {title: "Taxa de recuperação", value: posVacinacao.data?.meanDeathRate},
          {title: "Média de mortes diárias", value: posVacinacao.data?.meanNewRecoveries}
        ]}/>
      </Grid>
      <Grid item container
        sx={{
          border: "1px solid #fff",
        }} xs={8}>
        <Grid container item justifyContent="center">
          <BasicScatterPlot />
        </Grid>
      </Grid>
    </Grid>
  );
};
