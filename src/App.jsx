import React from "react";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    secondary: {
      main: '#F85606'
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  );
};

export default App;
