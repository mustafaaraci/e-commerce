import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DetailPage from "../pages/DetailPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductList from "../components/ProductList";




function RouterConfig() {
  return (
 <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/home" element = {<Home/>}/>
    <Route path="/product-detail/:id" element = {<DetailPage/>}/>
    <Route path="/Login" element = {<Login/>}/>
    <Route path="/register" element={<Register />} />
    <Route path="/erkek" element={<ProductList/>} />
    <Route path="/kadin" element={<ProductList/>} />
    <Route path="/outlet" element={<ProductList/>} />
   
 </Routes>
)}

export default RouterConfig;
