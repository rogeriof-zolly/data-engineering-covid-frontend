import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";
import SidebarMenu from "./shared/components/sidebar-menu/SidebarMenu";
import { DrawerProvider } from "./shared/contexts/DrawerContext";

const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>
          <SidebarMenu>
            <AppRoutes></AppRoutes>
          </SidebarMenu>
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};

export default App;
