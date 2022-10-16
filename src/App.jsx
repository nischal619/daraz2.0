import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
 import './App.css'
 import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./pages/Home.page"
import Products from "./pages/Products.page"
import Login from "./pages/Login.page"
import Signup from "./pages/Signup.page"
import { Home } from "@mui/icons-material";
const theme = createTheme({
  palette: {
    secondary: {
      main: "#F85606",
    },
  },
});

const App = () => {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>
      <ProductCard/>
    </ThemeProvider>
    </Router>
  );
};

export default App;
