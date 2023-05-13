import { set } from "mongoose";
import { isValidEmail } from "./regex";
import { useRef, useState, useEffect } from "react";

export const setError = (email, setEmailErr, password, setPasswordErr) => {
  let errorCount = 0;

  if (email.length < 3 && email.length > 0) {
    errorCount++;
    (errorCount > 0) ? setEmailErr("Ce champ doit contenir au moins 3 caracteres"): setEmailErr("");
  }

  if (email.length === 0) {
    errorCount++;
   (errorCount > 0) ? setEmailErr("Ce champ ne peut etre vide") : setEmailErr("");
  }

  if (!isValidEmail(email)) {
    errorCount++;
    (errorCount > 0) ? setEmailErr("Ce champ doit contenir un email valide"): setEmailErr("");
  }

  if (password.length === 0) {
    errorCount++;
    (errorCount > 0) ? setPasswordErr("Ce champ ne peut etre vide") : setPasswordErr("");
  }
  console.log(errorCount);
 
  if (errorCount === 0) {
  setEmailErr("");
  setPasswordErr("");
 };

   return errorCount;
};
