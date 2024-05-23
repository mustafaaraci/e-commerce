import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbIncandescentOutlinedIcon from '@mui/icons-material/WbIncandescentOutlined';


function Header() {

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
  return (
    <div className="navbar">
      <ul className="header">
        <li>
          <img
            className="logo"
            src="./src/images/logo.png"
            style={{ width: 100, height: 100, cursor: "pointer" }}
          />
        </li>
        <div className="navbar-mid">
          <ul className="header-mid">
            <li>Erkek</li>
            <li>Kadın</li>
            <li>Outlet Ürünler</li>
          </ul>
        </div>
        <ul className="header-right">
          <li>
            <SearchIcon className="search-icon" />
          </li>
          <li className="search-bar">
            <input type="text" placeholder="Ara.." />
           
          </li>
          <li>
            <ShoppingBasketIcon />
          </li>
          <li>
            <PersonIcon />
          </li>
          <li>
            {
               theme ?  <NightlightIcon className="night-mode" onClick={handleChangeMode}/> :
               <WbIncandescentOutlinedIcon className="light-mode" onClick={handleChangeMode}/>
            }
            
          </li>
        </ul>
      </ul>
    </div>
  );
}

export default Header;
