import React, { useState } from "react";
import { Button } from "react-bootstrap";


function Product({product}) {
    const {id,title,image,price,description,category} =product;
   // console.log(product);
    const [quantity,setQuantity] = useState(1);
  return (
  
  <div className="card">
     <img src={image} className="card-img-top" style={{width:200,height:200,borderRadius:10}}/>
  <div className="card-body" style={{width:290,height:50}}>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">
     {price}₺
    </p>
   </div>
   <div className="btn-group">
        <button className="btn-sepete-ekle">Sepete Ekle</button>
        <div className="btn-right-group">
          <button className="btn-right">+</button>
          <span className="quantity">{quantity}</span>
          <button className="btn-right">-</button>
        </div>
      </div>
  </div>
   
  
  )
}
export default Product;
