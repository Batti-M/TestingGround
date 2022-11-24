import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

/*
product_structure in cart:
{id:
name:
price,
imageUrl,
quantity} 
*/
const addCartItem = (cartItems, productToAdd) => {
  const sameProduct = cartItems.find((item) => item.id === productToAdd.id);
  
  if(sameProduct){
    return cartItems.map( item => 
      item.id === productToAdd.id ?
      {...item, quantity: item.quantity+1}
      : item
    );
  }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
    
};

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  
  

  useEffect( () => {
    const quantityCounts = cartItems.reduce( (total,cartItem) => 
      { return total + cartItem.quantity},0) ;
      setCartCount(quantityCounts);
      
  },[cartItems])
  

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
   
  };
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};
  return (
    <CartContext.Provider value={value}>
    {children}
    </CartContext.Provider>

  )
};

export { CartProvider };
