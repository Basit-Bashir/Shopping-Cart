import React, { useState } from "react";
import ProductList from "./Components/ProductList";
import Cart from "./Components/Cart";
import img from "./Components/imgs/img1.jpeg";
import img1 from "./Components/imgs/img2.jpeg";
import img2 from "./Components/imgs/img3.jpeg";
import img3 from "./Components/imgs/img4.jpeg";
import img4 from "./Components/imgs/img5.jpeg";

const productsData = [
  {
    id: 1,
    name: "HP Printer",
    price: 20000,
    image: img,
  },
  {
    id: 2,
    name: "Dell AlienWare",
    price: 39998,
    image: img1,
  },
  {
    id: 3,
    name: "Apple PC",
    price: 78987,
    image: img2,
  },
  {
    id: 4,
    name: "HP G7",
    price: 29999,
    image: img3,
  },
  {
    id: 5,
    name: "HP Notebook",
    price: 39433,
    image: img4,
  },
];
function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="text-center container mx-auto p-4">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-orange-500 mb-8 p-4 rounded-lg text-white">
        Shopping Cart!
      </h1>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col mx-auto">
          <button
            className="block font-semibold tracking-[1px] bg-orange-500  text-white px-8 py-4 rounded hover:bg-orange-600 "
            onClick={toggleCart}
          >
            {isCartOpen ? "Close Cart" : "Open Cart"}
          </button>
          {isCartOpen && <Cart cartItems={cartItems} />}
        </div>
        <div className="col-span-2">
          <ProductList products={productsData} addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
