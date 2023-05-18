import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { logOut } from "../../../features/auth/authSlice";
import { selectCurrentFirstname } from "../../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../Header.css";

const UserProfile = () => {
  let currentUser = useSelector(selectCurrentFirstname);
  const dispatch = useDispatch();
  return (
    <div className="sign_out">
      <a className="main-nav-item" href="./user.html">
        <FaUserCircle />
        {currentUser}
      </a>
      <a className="main-nav-item" href="./" onClick={() => dispatch(logOut())}>
        <FaSignOutAlt />
        Sign Out
      </a>
    </div>
  );
};

export default UserProfile;
