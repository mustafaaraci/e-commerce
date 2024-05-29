import { Drawer } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

function CardPage() {
    const {cartProduct,drawer} = useSelector((store)=>store.cart);

  return (
    <Drawer anchor="right" open={drawer} style={{width:300}}>
        {
            cartProduct && cartProduct.map((product)=>{
                return(
                 <div>
                    <img src={product.image} alt="" style={{width:150,height:150}}/>
                    <p>{product.title}({product.quantity})</p>
                    <p>{product.price}</p>
                 </div>
                )
            })
        }
    </Drawer>
  )
  
}

export default CardPage;
