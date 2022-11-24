import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import "./navigation.styles.scss"
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
      <div className="navigation">
        <Link to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
        <Link className="nav-link" to="/shop">
          SHOP
        </Link>
        { currentUser ? (
          <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
        ) : 
       ( <Link className="nav-link" to="/auth">
          Sign In
        </Link>)}
       
        <CartIcon className="logo" />
        
        </div>
        {
          isCartOpen && <CartDropdown />
        }
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
