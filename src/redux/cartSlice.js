import { createSlice } from "@reduxjs/toolkit";


const getFromCartToStorage  = ()=>{
    if(localStorage.getItem("cart")){
        return JSON.parse(localStorage.getItem("cart"))
    }
    return []
    }

const initialState = {
    cartProduct:getFromCartToStorage(),
    drawer:false
}

const writeFromCartToStorage = (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart))
}


export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addProductToCart: (state,action)=>{
    const findProduct =   state.cartProduct && state.cartProduct.find((product)=> product.id === action.payload.id)

    if(findProduct){
        //önceden eklenen ürünleri çıkartıyoruz.sepetteki ürünlerimiz yenileniyor.
        const extructedProduct = state.cartProduct.filter((product)=>product.id !== action.payload.id);
        findProduct.quantity += action.payload.quantity;
        state.cartProduct = [...extructedProduct,findProduct];
        writeFromCartToStorage(state.cartProduct);

    }else{
        //sonradan aynı ürünü eklersek
        state.cartProduct= [...state.cartProduct,action.payload];
        writeFromCartToStorage(state.cartProduct);
    }
 },
 setDrawer:  (state)=>{
    state.drawer = !state.drawer
 }
        

    }
})

export const {addProductToCart,setDrawer} = cartSlice.actions;
export default  cartSlice.reducer;