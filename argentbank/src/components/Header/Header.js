import React from "react";
import './Header.css'
import  logo  from "../../assets/img/argentBankLogo.png"
// import  login  from "../../assets/img/user-circle.svg"
import { FaUserCircle } from 'react-icons/fa';
import UserProfile  from "./userProfile/userProfile";

import { useEffect } from "react";
const Header = () => {

 
    let profileLocation = window.location.href


   const content = (profileLocation !== "http://localhost:3000/profile") ? 
   (
    <nav class="main-nav">
    <a class="main-nav-logo" href="/index.html">
      <img
        class="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 class="sr-only">Argent Bank</h1>
    </a>
    <div>
      <a class="main-nav-item" href="/login">
      <FaUserCircle/>
       Sign In
      </a>
    </div>
  </nav>
):
(
  <nav class="main-nav">
  <a class="main-nav-logo" href="/index.html">
    <img
      class="main-nav-logo-image"
      src={logo}
      alt="Argent Bank Logo"
    />
    <h1 class="sr-only">Argent Bank</h1>
  </a>
  <div>
   <UserProfile/>
  </div>
</nav>
)
    return content
}
export default Header;