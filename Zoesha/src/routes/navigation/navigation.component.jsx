import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";


import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from "./navigation.styles.jsx"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser)

  const isCartOpen = useSelector(selectIsCartOpen)
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <span style={{fontSize:"4rem",fontStyle:"italic",color:"white",fontWeight:"bold"}}className="logo">ZOESHA</span>
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          { currentUser ? (
            <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
          ) : 
        ( <NavLink to="/auth">
            Sign In
          </NavLink>)}

       
        <CartIcon className="logo" />
        
        
        {
          isCartOpen && <CartDropdown />
        }
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
