import React, { useState, useEffect } from "react";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";

function Home() {
  const dispatch = useDispatch();
  const { products, searchFilter } = useSelector((state) => state.product);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchFilter) {
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchFilter.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchFilter, products]);
  
  return (
    <div className="product-list">
      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          
          <Product key={product.id} product={product} />
          
         
        ))
      ) : searchFilter ? (
        <div className="product-list" style={{fontSize:22}}>Aradığınız ürün bulunamadı!</div>
      ):(
        <ProductList />
      )}
    </div>
  );
}

export default Home;
