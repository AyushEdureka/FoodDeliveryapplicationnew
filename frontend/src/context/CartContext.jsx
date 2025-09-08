import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = sessionStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const addToCart = (food) => {

    setCartItems((prevCart) => {
      const exists = prevCart.find((item) => item._id === food._id);
      if (exists) {
        return prevCart.map((item) =>
          item._id === food._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...food, quantity: 1 }];
      }
    });
  };

  const increaseQty = (_id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item._id === _id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const DecreaseQty = (_id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item._id === _id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (_id) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => item._id !== _id)
    );
  };

  const clearCart = () => {
    sessionStorage.removeItem("cart");
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        DecreaseQty,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
