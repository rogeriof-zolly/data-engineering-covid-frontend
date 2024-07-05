import { Home } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { useDrawerContext } from "../../contexts/DrawerContext";

interface SidebarProps {
  children: React.ReactNode | React.ReactNode[];
}

const SidebarMenu: React.FC<SidebarProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        onClose={toggleDrawerOpen}
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              sx={{
                bgcolor: deepOrange[500],
                height: theme.spacing(12),
                width: theme.spacing(12),
                fontSize: theme.spacing(4),
              }}
            >
              RZ
            </Avatar>
          </Box>
          <Divider></Divider>
          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Home></Home>
                </ListItemIcon>
                <ListItemText>Página Inicial</ListItemText>
              </ListItemButton>
            </List>
          </Box>
        </Box>
      </Drawer>
      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};

export default SidebarMenu;
