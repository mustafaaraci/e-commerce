import { Drawer } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateToCart, setDrawer,incrementQuantity,
     decrementQuantity, removeProductFromCart } from "../redux/cartSlice";
import "../css/CardPage.css";  

function CardPage() {
  const { cartProduct, drawer,totalAmount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(calculateToCart());
  },[cartProduct,dispatch])

  return (
    <Drawer anchor="right" onClose={() => dispatch(setDrawer())} open={drawer} className="drawer">
      <div className="cart-container">
        <h2 className="cart-title">Sepetim</h2>
        {cartProduct.length === 0 ? (
          <p className="empty-cart">Sepette ürününüz bulunmamaktadır</p>
        ) : (
          cartProduct.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt="" className="cart-item-image" />
              <div className="cart-item-details">
                <p className="cart-item-title">{product.title} ({product.quantity} Adet)</p>
                <p className="cart-item-quantity">Beden: {product.size}</p>
                <p className="cart-item-price">{product.price.toFixed(2)}₺</p>
                <p className="cart-item-total">Toplam: {(product.price * product.quantity).toFixed(2)}₺</p>
                <div className="quantity-controls">
                  <button onClick={() => dispatch(decrementQuantity(product.id))}>-</button>
                  <span>{product.quantity}</span>
                  <button onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                </div>
                <button className="remove-item" onClick={() => dispatch(removeProductFromCart(product.id))}>Ürünü Çıkar</button>
              </div>
            </div>
          ))
        )}
        {cartProduct.length > 0 && <p className="total-amount">Toplam Fiyat: {totalAmount}₺</p>}
      </div>
    </Drawer>
  );
}

export default CardPage;
