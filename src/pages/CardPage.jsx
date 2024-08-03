import { Drawer } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateToCart, setDrawer,incrementQuantity,
     decrementQuantity, removeProductFromCart } from "../redux/cartSlice";
import "../css/CardPage.css";  
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CardPage() {
  const { cartProduct, drawer,totalAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(calculateToCart());
  },[cartProduct,dispatch])

  return (
    <Drawer anchor="right" onClose={() => dispatch(setDrawer())} open={drawer} className="drawer">
      <div className="cart-container">
        <h2 className="cart-title">Sepetim<ShoppingCartIcon style={{fontSize:40}}/></h2>
        {cartProduct.length === 0 ? (
          <p className="empty-cart">Sepette ürün bulunmamaktadır <RemoveShoppingCartIcon/></p>
         ) : (
          cartProduct.map((product) => (
            <div key={`${product.id}-${product.size}`}  className="cart-item"> 
            <img src={product.image} alt="" className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-title">{product.title} ({product.quantity} Adet)</p>
                <p className="cart-item-quantity">Beden:{product.size}</p>
                <p className="cart-item-price">Ürün Fiyat:{product.price ? product.price.toFixed(2) : "0.00"}₺</p>
                <p className="cart-item-total">Toplam Fiyat:{(product.price * product.quantity).toFixed(2)}₺</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decrementQuantity({ id: product.id, size: product.size }))}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity({ id: product.id, size: product.size }))}>+</button>
                </div>
                <button className="remove-item" onClick={() => dispatch(removeProductFromCart({ id: product.id, size: product.size }))}>Ürünü Çıkar</button>
              </div>
            </div>
          ))
        )}
        {cartProduct.length > 0 && <p className="total-amount">Toplam:{totalAmount.toFixed(2)}₺</p>}
        {cartProduct.length > 0 && <div className="total-amount">
              <button className="checkout-button">Sepeti Al</button>
            </div>}
      </div>
     
    </Drawer>
  );
}

export default CardPage;
