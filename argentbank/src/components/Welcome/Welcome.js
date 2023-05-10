import React from "react";
import { selectCurrentLastname } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { selectCurrentFirstname } from "../../features/auth/authSlice";
import Modal from "../Modal/Modal";

const Welcome = ({ isOpen, setIsOpen }) => {
  const firstname = useSelector(selectCurrentFirstname);
  const lastname = useSelector(selectCurrentLastname);
  const welcome = (firstname && lastname) ? `${firstname + ' ' + lastname}` : " ";
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {welcome}!
      </h1>
      <button className="edit-button" onClick={() => setIsOpen(true)}>
        Edit Name
      </button>
      <Modal
        open={isOpen}
        text="Welcome Back"
        onClose={() => setIsOpen(false)}
        state={isOpen}
      ></Modal>
    </div>
  );
};

export default Welcome;
