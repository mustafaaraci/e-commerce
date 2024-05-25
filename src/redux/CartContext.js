import React,{useState,createContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItems,setCartItems] = useState([]);

    const AddToCart =(product)=>{
        setCartItems([...cartItems,product])
    }
    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
        {children}
      </CartContext.Provider>
    )
  
};



