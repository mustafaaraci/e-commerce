import React from "react";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";


function App() {
  return (
    <PageContainer>
      <Header/>
      <RouterConfig/>
    </PageContainer>
  )
 
}

export default App;
