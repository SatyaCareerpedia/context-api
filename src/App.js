import React, { useState } from "react";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import "./App.css";

import  {ThemeContext}  from "./Context/ThemeContext";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";

const App = () => {
  const [cart, setCart] = useState([]);

  const [isDark, setIsDark] = useState(false); // State to manage theme

  const toggleTheme = () => setIsDark(!isDark); // Toggle function

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 20,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 30,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 40,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Product 4",
      price: 50,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Product 5",
      price: 60,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Product 6",
      price: 70,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Product 7",
      price: 80,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Product 8",
      price: 90,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Product 9",
      price: 100,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Product 10",
      price: 110,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Product 11",
      price: 120,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 12,
      name: "Product 12",
      price: 130,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 13,
      name: "Product 13",
      price: 140,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 14,
      name: "Product 14",
      price: 150,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 15,
      name: "Product 15",
      price: 160,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 16,
      name: "Product 16",
      price: 170,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 17,
      name: "Product 17",
      price: 180,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 18,
      name: "Product 18",
      price: 190,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 19,
      name: "Product 19",
      price: 200,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 20,
      name: "Product 20",
      price: 210,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 21,
      name: "Product 21",
      price: 220,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 22,
      name: "Product 22",
      price: 230,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 23,
      name: "Product 23",
      price: 240,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 24,
      name: "Product 24",
      price: 250,
      image: "https://via.placeholder.com/150",
    },
  ];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div
      style={{
        background: isDark ? "#333" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <Navbar
        cartCount={cart.reduce((count, item) => count + item.quantity, 0)}
        cartItems={cart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeFromCart={removeFromCart}
      />
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <div>
          <Header />
          <Content />
        </div>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
