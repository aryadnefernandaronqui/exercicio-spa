import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "./Config/GlobalStyled";
import AppRoutes from "./Routes/AppRoutes";
import theme from "./Config/Theme";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyled />
      <AppRoutes />;
    </ThemeProvider>
  );
}

export default App;
