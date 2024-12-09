import React from "react";
import { useCart } from "./CartContext";

const ProductCard = ({ product }) => {
    const { cart, dispatch } = useCart();

    const isInCart = cart.some((item) => item.id === product.id);

    const handleCartAction = () => {
        if (isInCart) {
            dispatch({ type: "REMOVE_FROM_CART", payload: product });
        } else {
            dispatch({ type: "ADD_TO_CART", payload: product });
        }
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Author: {product.author}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleCartAction}>
                {isInCart ? "Remove from Cart" : "Add to Cart"}
            </button>
        </div>
    );
};

export default ProductCard;
