import { Box } from "@mui/material";
import React from "react";
import BasicScatterPlot from "../components/BasicScatterPlot";

interface IBasePageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const BasePageLayout: React.FC<IBasePageLayoutProps> = ({
  children,
  title,
}) => {
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box>{title}</Box>

      <Box>Barra de Ferramentas</Box>

      <Box>
        <BasicScatterPlot></BasicScatterPlot>
      </Box>

      <Box>{children}</Box>
    </Box>
  );
};
