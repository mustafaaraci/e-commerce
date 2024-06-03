import { createSlice } from "@reduxjs/toolkit";


const getFromCartToStorage  = ()=>{
    if(localStorage.getItem("cart")){
        return JSON.parse(localStorage.getItem("cart"))
    }
    return []
    }

const initialState = {
    cartProduct:getFromCartToStorage(),
    drawer:false,
    totalAmount:0
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
 },
 calculateToCart: (state) => {
    state.totalAmount = state.cartProduct.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  },
  incrementQuantity: (state, action) => {
    const product = state.cartProduct.find((product) => product.id === action.payload);
    if (product && product.quantity < 5) {
        product.quantity += 1;
        writeFromCartToStorage(state.cartProduct);
    }
},
decrementQuantity: (state, action) => {
    const product = state.cartProduct.find((product) => product.id === action.payload);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        writeFromCartToStorage(state.cartProduct);
    }
},
removeProductFromCart: (state, action) => {
    state.cartProduct = state.cartProduct.filter((product) => product.id !== action.payload);
    writeFromCartToStorage(state.cartProduct);
},
        

    }
})

export const {addProductToCart,setDrawer,calculateToCart,incrementQuantity,decrementQuantity,removeProductFromCart} = cartSlice.actions;
export default  cartSlice.reducer;