import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import "./Login.css";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const containerDiv = document.querySelectorAll("div")[1];
    containerDiv.style.display = "flex";
    containerDiv.style.margin = 0;
    containerDiv.style.flexDirection = "column";
    containerDiv.style.minHeight = "100vh";
  }, [email, password]);
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const setError = () => {
    let errorCount = 0;
    switch (email) {
      case email.length < 3 && email.length > 0:
        setEmailErr("Ce champ doit contenir au moins 3 caracteres");
        errorCount++;
        break;
      case email.length === 0:
        setEmailErr("Ce champ ne peut etre vide");
        errorCount++;
        break;
      case !isValidEmail(email):
        setEmailErr("Ce champ doit contenir un email valide");
        errorCount++;
        break;
      case password.length === 0:
        setPasswordErr("Ce champ ne peut etre vide");
        errorCount++;
        break;
      default:
        console.log(`Aucune erreur`);
    }
    return errorCount;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    if (setError !== 0) {
      //Retrieve access token
      try {
        const data = await login({ email, password }).then(
          (data) => data.data.body
        );
      
        const accessToken = data.token;

        // Store the access token
        dispatch(setCredentials({ accessToken }));

        setEmail("");
        setPassword("");
        navigate("/profile");
      } catch (err) {
        console.log(err);
        errRef.current.focus();
      }
    }
  };

  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle />
        <h1>Sign In</h1>
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

          <button className="sign-in-button" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
  return content;
};

export default Login;
