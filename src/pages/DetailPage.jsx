import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/productSlice";

function DetailPage() {
    const {id} = useParams();
    const {products} = useSelector((store)=>store.product);
    const dispatch = useDispatch();

    useEffect(()=>{
    getProductById();
    },[])

    const getProductById = ()=>{
  products && products.map((product)=>{
    if(product.id == id){
     dispatch(setSelectedProduct(product));
    }
  })
    }
  return (
<div>DetailPage:{setSelectedProduct.title}</div>
  )
  
}

export default DetailPage;
