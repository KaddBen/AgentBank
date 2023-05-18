import React from 'react'
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import { setCredentials } from "../../features/auth/authSlice";
import { handleSubmit } from "../../pages/Login/LoginFunctions/handleSubmit";
import { setError } from "../../pages/Login/LoginFunctions/setError";
import "./Form.css"



const Form = ({login}) => {

const userRef = useRef();
const errRef = useRef();
const [email, setEmail] = useState("");
const [emailErr, setEmailErr] = useState("");
const [password, setPassword] = useState("");
const [passwordErr, setPasswordErr] = useState("");
const navigate = useNavigate();
const dispatch = useDispatch();


//let Error = setError(email, setEmailErr, password, setPasswordErr);
const handleUserInput = (e) => setEmail(e.target.value);
const handlePwdInput = (e) => setPassword(e.target.value);

useEffect(() => {
  userRef.current.focus();
 }, []);
  return (
    <form>
    <div className="input-wrapper">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        ref={userRef}
        value={email}
        onChange={handleUserInput}
        autoComplete="off"
        required
      />
      <span>{emailErr}</span>
    </div>
    <div className="input-wrapper">
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={handlePwdInput}
        value={password}
        autoComplete="on"
        required
      />
      <span>{passwordErr}</span>
    </div>
    <div className="input-remember">
      <input type="checkbox" id="remember-me" />
      <label htmlFor="remember-me">Remember me</label>
    </div>

    <button
      className="sign-in-button"
      onClick={(e) => handleSubmit(
        e,
        email,
        password,
        setEmail,
        setPassword,
        setEmailErr,
        setPasswordErr,
        navigate,
        userRef,
        login,
        dispatch,
        passwordErr,
        emailErr
      )}
    >
      Sign In
    </button>
  </form>
  )
}

export default Form