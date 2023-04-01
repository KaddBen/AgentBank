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
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log({ password, email });
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login({ email, password }).then(
        (data) => Object.values(data)[0]
      );
//
      const accessToken = Object.values(Object.values(data)[2])[0];
      const firstname = Object.values(
        Object.values(Object.values(data)[2])[1]
      )[3];
      const lastname = Object.values(
        Object.values(Object.values(data)[2])[1]
      )[4];
      console.log(data);
//
      dispatch(setCredentials({ accessToken, email, firstname, lastname }));
//
      setEmail("");
      setPassword("");
      navigate("/profile");
      console.log(data);
    } catch (err) {
      errRef.current.focus();
    }
  };
  const handleUserInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main class="main bg-dark">
      <section class="sign-in-content">
        <FaUserCircle />
        <h1>Sign In</h1>
        <form>
          <div class="input-wrapper">
            <label for="username">Username</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              value={email}
              onChange={handleUserInput}
              autoComplete="off"
              required
            />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={handlePwdInput}
              value={password}
              autoComplete="on"
              required
            />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>

          <button class="sign-in-button" onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
  return content;
};

export default Login;
