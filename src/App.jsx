import React from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Footer from "./components/Footer";
import { Drawer } from "@mui/material";
import CardPage from "./pages/CardPage";





function App() {
  return (
    <>
    <PageContainer>
      <Header/>
      <RouterConfig/>
      </PageContainer>
      <CardPage/>
      <Footer/>
      </>
  )
 
}

export default App;
