import { useEffect } from "react";
import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
  clearItemFromCart: () => {},
  total: 0
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

const removeCartItem = (cartItems,cartItemToRemove) => {
  const sameProduct = cartItems.find((item) => item.id === cartItemToRemove.id);
  
  if(sameProduct.quantity === 1){
    return cartItems.filter( item => item.id != cartItemToRemove.id)
  }

  return cartItems.map( item =>  item.id === cartItemToRemove.id ?
    {...item, quantity: item.quantity-1}
    : item
      )
}

const clearItem = (cartItems, cartItemToClear) => {
  return cartItems.filter( item => item.id != cartItemToClear.id)
}


const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal,setCartTotal] = useState(0);
  

  useEffect( () => {
    const quantityCounts = cartItems.reduce( (total,cartItem) => 
      { return total + cartItem.quantity},0) ;
      setCartCount(quantityCounts);
      
  },[cartItems])
  
  
  useEffect( () => {
    const newCartTotal = cartItems.reduce( (total,cartItem) => 
      { return total + cartItem.quantity * cartItem.price},0) ;
      setCartTotal(newCartTotal);
      
  },[cartItems])
  

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
   
  };
  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove))
  }
  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearItem(cartItems,cartItemToClear))
  }

  const value = { isCartOpen, setIsCartOpen,
     addItemToCart,removeItemFromCart, clearItemFromCart,cartItems,cartTotal, cartCount};
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>

  )
};

export { CartProvider };
