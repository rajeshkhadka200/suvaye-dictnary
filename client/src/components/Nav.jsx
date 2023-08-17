import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="left_side">
        <div className="img_con">
          <img src="/assets/logo.png" alt="" srcset="" />
        </div>
        <Link to="/">suvaye dictionary</Link>
      </div>
      {/* <div className="right_side">
        <Link to="/">Contact us</Link>
      </div> */}
    </nav>
  );
};

export default Nav;
