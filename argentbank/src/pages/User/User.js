import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Foot from "../../components/Foot/Foot.js";
import { useGetUserMutation } from "../../features/getUser/getUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userProfile } from "./UserFunction/userProfile";
import Welcome from "../../components/Welcome/Welcome";
import Account from "../../components/Account/Account";

function User() {
  const dispatch = useDispatch();


  const [isOpen, setIsOpen] = useState(false);
  const [getUser] = useGetUserMutation();

  useEffect(() => {
    userProfile(getUser,dispatch);
  }, [dispatch, getUser]);
  return (
    <div className="div_container">
      <Header />
      <main className={"main " + (isOpen ? "bg-light" : "bg-dark")}>
        <Welcome isOpen={isOpen} setIsOpen={setIsOpen}/>
        <h2 className="sr-only">Accounts</h2>
      <Account title="Argent Bank Checking (x8349)" amount="$2,082.79" description="Available Balance"/>
      <Account title="Argent Bank Savings (x6712)" amount="$10,928.42" description="Available Balance"/>
      <Account title="Argent Bank Credit Card (x8349)" amount="$184.30" description="Current Balance"/>
      </main>
      <Foot />
    </div>
  );
}

export default User;
