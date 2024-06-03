import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';




function Product({product}) {
    const {id,title,image,price,description,category} =product;
   // console.log(product);
    
    
    const [Price,setPrice] = useState(price);
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);



    const toggleFavorite = () => {
      setIsFavorite(!isFavorite); 
    };

return (
    <div className="card">
    <div className="favorite-icon-container">
      <FavoriteIcon className={`favorite-icon ${isFavorite ? 'favorite' : ''}`} onClick={toggleFavorite}/>
    </div>
    <img src={image} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
       <p className="card-text price-text">{Price}₺</p>
    </div>
    <div className="btn-group">
      <button className="btn-detay" onClick={() => navigate("/product-detail/" + id)}>Detay</button>
    </div>
  </div>
   
  
  )
}
export default Product;
