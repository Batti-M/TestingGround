import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import styled from "styled-components";
import {NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from "./navigation.styles.jsx"
import CartIcon from "../../components/cart-icon/cart-icon.component"
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component"

import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { UserContext } from "../../components/contexts/user.context";
import { CartContext } from "../../components/contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";


const Navigation = () => {
  
  const {currentUser} = useContext(UserContext);
  const {isCartOpen,setIsCartOpen} = useContext( CartContext)
  
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
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
