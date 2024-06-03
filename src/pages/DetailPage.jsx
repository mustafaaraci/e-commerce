import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/productSlice";
import { addProductToCart } from "../redux/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetailPage() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product);
    const { title, image, price, description, category } = selectedProduct;
    const dispatch = useDispatch();

    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);

    const notify = () => toast.success("Ürün sepete eklendi!", { autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false });

    useEffect(() => {
        getProductById();
    }, []);

    useEffect(() => {
        setTotalPrice(price * quantity);
    }, [price, quantity]);

    const getProductById = () => {
        const product = products.find((product) => product.id == id);
        if (product) {
            dispatch(setSelectedProduct(product));
        }
    };

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
            quantity,
            size
        };
        dispatch(addProductToCart(payload));
        notify();  // bildirim kısmı 
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
            <ToastContainer style={{marginTop:60}}/>
        </>
    );
}

export default DetailPage;
