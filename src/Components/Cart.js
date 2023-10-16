import React from "react";

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  return (
    <div className="p-6">
      {cartItems.length === 0 ? (
        <p className="text-lg font-semibold">
          Your cart is empty😥 click on any Product to add here
        </p>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-6 underline">
            Shopping Cart
          </h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4 tracking-[1px]"
            >
              <p className="p-2">{item.name}</p>
              <p>&#8377;{item.price.toFixed(1)}</p>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="font-bold tracking-[1px]">Total:</p>
            <p className="text-green-500 text-xl font-bold">
              &#8377;{totalAmount.toFixed(1)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
