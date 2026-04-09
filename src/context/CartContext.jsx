import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedSize === product.selectedSize
      );
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedSize === product.selectedSize 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId, selectedSize) => {
    setCart(prevCart => prevCart.filter(
      item => !(item.id === productId && item.selectedSize === selectedSize)
    ));
  };

  const updateQuantity = (productId, selectedSize, delta) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const updateScent = (productId, currentScent, newScent) => {
    setCart(prevCart => {
      const itemToUpdate = prevCart.find(
        item => item.id === productId && item.selectedSize === currentScent
      );
      
      if (!itemToUpdate) return prevCart;

      // Check if an item with the NEW scent already exists
      const existingNewScentItem = prevCart.find(
        item => item.id === productId && item.selectedSize === newScent
      );

      if (existingNewScentItem && currentScent !== newScent) {
        // Merge quantities and remove the old item
        return prevCart
          .map(item => {
            if (item.id === productId && item.selectedSize === newScent) {
              return { ...item, quantity: item.quantity + itemToUpdate.quantity };
            }
            return item;
          })
          .filter(item => !(item.id === productId && item.selectedSize === currentScent));
      } else {
        // Just update the scent
        return prevCart.map(item =>
          item.id === productId && item.selectedSize === currentScent
            ? { ...item, selectedSize: newScent }
            : item
        );
      }
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const safeCart = Array.isArray(cart) ? cart : [];
  const cartTotal = safeCart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = safeCart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      updateScent,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
