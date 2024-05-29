import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  setSelectedProduct } from "../redux/productSlice";
import { addProductToCart } from "../redux/cartSlice";



function DetailPage() {
    const {id} = useParams();
    const {products,selectedProduct} = useSelector((store)=>store.product);
    const {title,image,price,description,category} =selectedProduct;
    const dispatch = useDispatch();


    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice,setTotalPrice] = useState(price);
  
    

    useEffect(()=>{
    (getProductById())
    
    },[]);


    const  getProductById = () =>{
        products && products.map((product)=>{
            if(product.id == id){
             dispatch(setSelectedProduct(product));
            }
          })
     }
    

    


     
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const incrementQuantity = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
            setTotalPrice((prevTotalPrice) => +(prevTotalPrice + price).toFixed(2));
        }
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setTotalPrice(prevTotalPrice => +(prevTotalPrice - price).toFixed(2));
        }
    };

    const handleAddToCart = () => {
       const payload = {
        id,
        title,
        price,
        image,
        description,
        quantity
        
       }
       dispatch(addProductToCart(payload))
    };


   

   
    return (
    <>
   <div className="detail-page">
            <div className="product-image">
                <img src={image} alt={title} />
            </div>
            <div className="product-details">
                <h2>{title}</h2>
                <h3>{category}</h3>
                <p className="price">{totalPrice}₺</p>
                <p className="description">{description}</p>
                <div className="size-selection">
                    <label htmlFor="size">Beden:</label>
                    <select id="size" value={size} onChange={handleSizeChange}>
                        <option value="">Seçiniz</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </div>
                <div className="quantity-selection">
                    <label>Adet:</label>
                    <button onClick={decrementQuantity}>-</button>
                    <span>{quantity}</span>
                    <button onClick={incrementQuantity}>+</button>
                </div>
                <button className="add-to-cart" onClick={handleAddToCart}>Sepete Ekle</button>
            </div>
        </div>
   </>
  )

}

export default DetailPage;


