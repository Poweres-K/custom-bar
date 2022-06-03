import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="total">
        <p>
          <small>My Balance</small>
        </p>
        <h2>$921.48</h2>
      </div>
      <div>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Header;
