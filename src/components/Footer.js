import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="total">
        <ul>
          <li>
            <small>Total this month</small>
          </li>
          <li>
            <big>$478.33</big>
          </li>
        </ul>
      </div>
      <div className="lastmont">
        <ul>
          <li>
            <small>+2.4%</small>
          </li>
          <li>
            <small>from last month</small>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
