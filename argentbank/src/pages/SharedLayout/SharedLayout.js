import React from "react";
import Header from "../../components/Header/Header";
import Foot from "../../components/Foot/Foot.js";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Foot />
    </div>
  );
};

export default SharedLayout;
