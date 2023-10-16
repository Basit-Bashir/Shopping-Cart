import React from "react";

const Product = ({ product, addToCart }) => {
  return (
    <div className="border p-4">
      <img src={product.image} alt={product.name} className="mb-2" />
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p className="text-gray-600 font-semibold">&#8377; {product.price}</p>
      <button
        className="bg-blue-500 text-white px-2 py-2 rounded-lg mt-2 hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
