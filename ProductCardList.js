import React from "react";
import ProductCard from "./ProductCard";

const ProductCardList = ({ products }) => {
    return (
        <div>
            <div className="header">
                <img src="logo.png" alt="logo" />
                <h1>Shop</h1>
                <div>Explore our products</div>
            </div>
            <div className="product-card-list">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductCardList;
