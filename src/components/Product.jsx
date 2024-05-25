import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";



function Product({product}) {
    const {id,title,image,price,description,category} =product;
   // console.log(product);
   
    const [quantity,setQuantity] = useState(1);
    const [totalPrice,setTotalPrice] = useState(price);
    const navigate = useNavigate();




    const increment =()=>{
        if (quantity<5) {
            setQuantity(quantity+1);
       // setTotalPrice(totalPrice + price);
        setTotalPrice((prevTotalPrice) => +(prevTotalPrice + price).toFixed(2));
        }
        
    }

    const decrement = ()=>{
        if(quantity>1){
            setQuantity(quantity-1);
          //  setTotalPrice(totalPrice-price);
            setTotalPrice(prevTotalPrice => +(prevTotalPrice - price).toFixed(2));
        }
        
    }
   
  return (
  
  <div className="card">
     <img src={image} className="card-img-top" style={{width:200,height:200,borderRadius:10}}/>
  <div className="card-body" style={{width:290,height:50}}>
    <h5 className="card-title">{title}</h5>
    <p className="card-text price-text">{totalPrice}₺</p>
   </div>
   <div className="btn-group">
    <div className="btn-group-item">
       <button className="btn-sepete-ekle">Sepete Ekle</button>
        <button className="btn-detay" onClick={()=>navigate("/product-detail/"+id)}>Detay</button>
    </div>
       
        <div className="btn-right-group">
          <button className="btn-right" onClick={decrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button className="btn-right" onClick={increment}>+</button>
        </div>
      </div>
  </div>
   
  
  )
}
export default Product;
