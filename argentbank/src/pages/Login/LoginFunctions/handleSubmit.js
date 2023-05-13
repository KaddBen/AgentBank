import { setCredentials } from "../../../features/auth/authSlice";
import { setError } from "./setError";
import { useRef, useState, useEffect } from "react";

export const handleSubmit = async (
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
   ) => {
    e.preventDefault();
    e.stopPropagation()
    // eslint-disable-next-line no-unused-expressions
 let Error = setError(email, setEmailErr, password, setPasswordErr)
     // eslint-disable-next-line no-unused-expressions
  console.log(Error)
    if (Error === 0) {
      //Retrieve access token
      try {
        const data = await login({ email, password }).then(
          (data) => data.data.body
        );
        const accessToken = data.token;
console.log(accessToken)
        // Store the access token
        dispatch(setCredentials({ accessToken }));

        setEmail("");
        setPassword("");
        navigate("/profile");
      } catch (err) {
        console.log(err);
      }
    }
  };
