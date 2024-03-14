
import homeImage from "../public/favicon.png"
import cartImage from "../public/apple-touch-icon.png"
import logo from "../public/logo.png"
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import MyContext from "../MyContext";
//sC:\Users\hp\OneDrive\Desktop\shopping-cart-starter\src\public\apple-touch-icon.png
const Navbar = () => {
  const{cartCount}=useContext(MyContext)
  return (
    <div className="navbar">
      <div className="home-image-small">

      <Link to="/home">
          <img src={homeImage} alt="home page"/>    


      </Link>
      </div>

      <div className="home-image-large">

      <Link to="/home">
          <img src={logo} alt="home page"/>    


      </Link>
        
      </div>
      <div className="nav-cart cart-image">


        <div className="cart-count">
          {cartCount}
        </div>
              <div className="cart-image">

        <Link to="/cart">
            <img src={cartImage} alt="home page"/>    


        </Link>
        </div>
        
      </div>

      
      
      
      
    </div>
  );
};

export default Navbar;
