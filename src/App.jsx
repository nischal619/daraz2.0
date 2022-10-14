import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
 import './App.css'
const theme = createTheme({
  palette: {
    secondary: {
      main: "#F85606",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <ProductCard /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
