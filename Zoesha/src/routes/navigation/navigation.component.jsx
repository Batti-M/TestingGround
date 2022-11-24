import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import "./navigation.styles.scss"

import {ReactComponent as CrownLogo} from "../../assets/crown.svg"
import { UserContext } from "../../components/contexts/user.context";


const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  console.log(currentUser)
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
          <span className="nav-link">SIGN OUT</span>
        ) : 
       ( <Link className="nav-link" to="/auth">
          Sign In
        </Link>)}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
