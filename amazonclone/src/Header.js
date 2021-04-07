import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket,user }, dispatch] = useStateValue();
  const handleAuthentication =() =>{
    if (user){
      auth.signOut();
    }

  }
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div  onClick={handleAuthentication}  className="header_option">
            <span className="header__optionLineOne">Hello ,{user? `${user?.email}`:'Guest'}</span>

  <span className="header__optionLineTwo">{user?'Sign Out':'Sign In'}</span>
          </div>
        </Link>
        <div className="header_option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/Checkout">
          <div className="header_optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header_cartCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
