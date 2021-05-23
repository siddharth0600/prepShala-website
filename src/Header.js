import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "./prepshala1.png";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__icon" src={logo} alt="logo" />
      </Link>
      {/* We dont use a tag in react bcz it refreshes the search page */}

      <div className="header__right">
        {/* <p>Become a student</p> */}
        {/* <LanguageIcon /> */}
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
