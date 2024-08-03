import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, setSelectedProduct } from "../redux/productSlice";
import Product from "../components/Product";
import Loading from "./Loading";
import { useParams } from "react-router-dom";




function ProductList() {
  const { category } = useParams();
    const dispatch = useDispatch();
    const {products,filterProducts,loading} = useSelector((store)=>store.product);
    
   //console.log(products);
   
    
    useEffect(()=>{
        dispatch(getAllProducts())
        
    },[dispatch])

    useEffect(() => {
      if (category) {
          dispatch(setCategoryFilter(category));
      }
  }, [category, dispatch]);
  return (
    
    // <div className="product-list">
     
    //    <Loading/>
    //   {
    //     products && products.map((product)=>(
    //       <Product key={product.id} product={product}/>
    //     ))
    //   }
    // </div>

    <div className="product-list">
      {loading && <Loading />}
      {
        filterProducts && filterProducts.length > 0 ? (
          filterProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <div style={{ fontSize: 22 }}>
            {category ? "Bu kategori altında ürün bulunamadı!" : "Ürün bulunamadı!"}
          </div>
        )
      }
    </div>
  )

}

export default ProductList;
