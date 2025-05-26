import React, { useState } from "react";
import flechep from "../assets/flechep.svg";
import Navbar from '../components/Navbar';
import panier from "../assets/panier.svg";
import bonsai from "../assets/bonsai.svg";
import snake from "../assets/snake.svg";
import peony from "../assets/peony.svg";
import increment from "../assets/increment.svg";
import decrement from "../assets/decrement.svg";
import croix from "../assets/croix.svg";
import { useNavigate } from "react-router-dom";
import divider from "../assets/divider.svg";
import blackdivider from "../assets/blackdivider.svg";

const ProductCard = ({
  id,
  image,
  name,
  price,
  quantity,
  onIncrement,
  onDecrement,
  onRemove,
}) => (
  <div className="bg-[#f9f9f9] rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#e6e6e6] p-3">
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <div className="bg-[#43862e]/5 rounded-tl-3xl rounded-bl-3xl backdrop-blur-[2px]">
        <img
          className="w-24 h-24 rounded-tl-3xl rounded-bl-3xl object-cover"
          src={image}
          alt={name}
        />
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-black text-xl font-medium font-inter">{name}</p>
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-[20px] outline outline-2 outline-offset-[-2px] outline-black/5 w-20 h-10 flex items-center justify-center">
            <p className="text-black text-base font-medium font-inter">
              {quantity}
            </p>
          </div>
          <div className="flex flex-col justify-between h-10">
            <img
              className="w-[28px] h-[28px] cursor-pointer"
              src={increment}
              onClick={() => onIncrement(id)}
              alt="Increment"
            />
            <img
              className="w-[28px] h-[28px] cursor-pointer"
              src={decrement}
              onClick={() => onDecrement(id)}
              alt="Decrement"
            />
          </div>
        </div>
      </div>

      {/* Prix + Bouton supprimer */}
      <div className="ml-auto flex items-center gap-4">
        <div className="text-black text-xl font-medium font-inter">
          {price * quantity}DA
        </div>
        <img
          src={croix}
          className="size-[22px] rounded-full cursor-pointer"
          onClick={() => onRemove(id)}
          alt="Remove"
        />
      </div>
    </div>
  </div>
);

 const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: snake,
      name: "Snake plant",
      price: 290,
      quantity: 1,
    },
    {
      id: 2,
      image: peony,
      name: "Peony plant",
      price: 250,
      quantity: 3,
    },
    {
      id: 3,
      image: bonsai,
      name: "Bonsai plant",
      price: 430,
      quantity: 2,
    },
  ]);

  const totalQuantity = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  );
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const handleIncrement = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const handleDecrement = (id) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#e1ece3]">
      <Navbar />

      <div className="w-full  mt-13 mb-10 px-6 sm:px-24">
        <div className="ml-6 flex items-center gap-8 flex-wrap">
          <img
            src={panier}
            alt="Icon"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <h1 className="text-xl sm:text-4xl font-medium font-inter">Cart</h1>
          <h3 className="text-l font-extralight font-inter">
            {products.length} items
          </h3>
        </div>
        <img src={divider} />
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start gap-20 px-4 sm:px-6">
        {/* Produits */}
        <div className="flex flex-col gap-8 w-full max-w-3xl">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              onRemove={handleRemove}
            />
          ))}
        </div>

        {/* Résumé */}
        <div className="relative bg-[#f9f9f9] rounded-3xl outline outline-2 outline-offset-[-2px] outline-[#e6e6e6] w-full max-w-md p-6">
          <h2 className="text-xl font-medium mb-6">Order summary</h2>
          {products.map((product) => (
            <div
              className="flex justify-between mb-2 font-light text-lg"
              key={product.id}
            >
              <span>
                {product.name} ×{product.quantity}
              </span>
              <span>{product.price * product.quantity}DA</span>
            </div>
          ))}
          <img src={blackdivider} className="ml-6 mt-6" />
          <div className="flex justify-between font-medium mt-4">
            <span>Total</span>
            <span>{totalPrice}DA</span>
          </div>
          <button
            onClick={() => navigate("/confirm-order")}
            className="w-full mt-6 bg-[#43862e] rounded-lg py-3 flex items-center justify-between
             px-4 text-white font-medium cursor-pointer"
          >
            Continue
            <img src={flechep} className="w-5 h-5 " alt="continue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;