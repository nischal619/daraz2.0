import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
 import './App.css'
import Carousel from "./components/Carousel";
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
      <Carousel/>
      {/* <ProductCard /> */}
      <Footer />
    </ThemeProvider>
  );
};

export default App;
