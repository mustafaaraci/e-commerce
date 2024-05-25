import React from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Footer from "./components/Footer";
import Loading from "./components/Loading";




function App() {
  return (
    <PageContainer>
      <Header/>
      <RouterConfig/>
      <Footer/>
     
    </PageContainer>
  )
 
}

export default App;
