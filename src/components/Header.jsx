import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';
import { Link } from "react-router-dom";


function Header() {
  
  const [cartCount, setCartCount] = useState(1); // Sepet sayısı için state oluşturma
    const [theme,setTheme] = useState(true);
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
    const addToCart = () => {
      setCartCount(cartCount + 1); // Ürün eklenince sepet sayısını artırma
    };
  return (
   <div className="navbar">
    <div className="navbar-content">
       <Link to="/"> <img
            className="logo"
            src="./src/images/logo.png"
           />
           </Link>
        <div className="navbar-mid">
            <ul className="header-mid">
                <li>Erkek</li>
                <li>Kadın</li>
                <li>Outlet Ürünler</li>
            </ul>
        </div>
        <div className="navbar-right">
            <SearchIcon className="search-icon" />
            <input type="text" placeholder="Ara.." className="search-bar" />
            <div className="cart-icon-wrapper">
            <ShoppingBasketIcon className="basket-icon"/>
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span>
            )}
          </div>
            <PersonIcon className="user-icon"/>
            <span className="login-text">Giriş Yap</span>
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
