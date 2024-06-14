import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Login from "../pages/Login";
import Register from "../pages/Register";




function RouterConfig() {
  return (
 <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/anasayfa" element = {<Home/>}/>
    <Route path="/product-detail/:id" element = {<DetailPage/>}/>
    <Route path="/Login" element = {<Login/>}/>
    <Route path="/register" element={<Register />} />
   
 </Routes>
)}

export default RouterConfig;
