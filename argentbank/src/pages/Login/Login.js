import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Form from "../../components/Form/Form";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import "./Login.css";

const Login = () => {
  
  const [login, { isLoading }] = useLoginMutation();

  const content = isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FaUserCircle />
        <h1>Sign In</h1>
        <Form login={login}></Form>
      </section>
    </main>
  );
  return content;
};

export default Login;
