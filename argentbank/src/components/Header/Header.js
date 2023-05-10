import React from "react";
import "./Header.css";
import logo from "../../assets/img/argentBankLogo.png";
import { FaUserCircle } from "react-icons/fa";
import UserProfile from "./userProfile/userProfile";
const Header = () => {
  let profileLocation = window.location.href;
  const content =
    profileLocation !== "http://localhost:3000/profile" ? (
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a className="main-nav-item" href="/login">
            <FaUserCircle />
            Sign In
          </a>
        </div>
      </nav>
    ) : (
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <UserProfile />
        </div>
      </nav>
    );
  return content;
};
export default Header;
