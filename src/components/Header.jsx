import React, { useState,useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import {  useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDrawer } from "../redux/cartSlice";



function Header() {
  const {products} =useSelector((store)=>store.product);
  const [filteredProducts, setFilteredProducts] = useState(products);
  //console.log(products,"ürünler");
  const [searchTerm, setSearchTerm] = useState("");
  const {cartProduct} =useSelector((store)=>store.cart);
  
    const [theme,setTheme] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    

    const handleChangeMode = ()=>{
        const root =document.getElementById('root');
        setTheme(!theme);
        if(theme){
            root.style.backgroundColor ="black";
            root.style.color ="white";
        }else{
            root.style.backgroundColor ="white";
            root.style.color ="black";
        }

    }
    

    useEffect(() => {
      if (searchTerm) {
        const filtered = products.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(products);
      }
    }, [searchTerm, products]);


    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
    
  return (
   <div className="navbar">
    <div className="navbar-content">
    <img
        className="logo"
        src="./src/images/moon.png"
        style={{width:60,height:60}} onClick={()=> navigate("/")}  alt="Logo"/>
        <div className="navbar-mid">
            <ul className="header-mid">
                <li>Erkek</li>
                <li>Kadın</li>
                <li>Outlet Ürünler</li>
            </ul>
        </div>
        <div className="navbar-right">
    <div className="input-group" style={{ display: "flex", alignItems: "center" }}>
  <input 
    type="text" 
    placeholder="Aradığınız ürün veya markayı yazınız" 
    className="search-bar" 
    style={{ width: 300 }} 
    value={searchTerm}
    onChange={handleSearch}
  />
  <SearchIcon className="search-icon"/>
</div>
<div className="cart-icon-wrapper" onClick={() => dispatch(setDrawer())}>
            <ShoppingBasketIcon className="basket-icon" />
            <span className="cart-text">Sepet</span>
            {cartProduct.length >= 0 && (
              <span className="cart-count">{cartProduct.length}</span>
            )}
          </div>
          <div className="login-container" onClick={() => navigate("/Login")}>
  <div className="login-content">
    <PersonIcon className="user-icon" />
    <span className="login-text">Giriş Yap</span>
  </div>
</div>
            {theme ? (
                <NightlightIcon className="night-mode" onClick={handleChangeMode} />
            ) : (
                <WbIncandescentOutlinedIcon className="light-mode" onClick={handleChangeMode} />
            )}
        </div>
        
    </div>
    
</div>

  );
}

export default Header;
