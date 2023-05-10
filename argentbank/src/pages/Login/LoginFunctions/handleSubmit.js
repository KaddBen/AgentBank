import { setCredentials } from "../../../features/auth/authSlice";

export const handleSubmit = async (
    e, 
    email, 
    password,
    setEmail,
    setPassword, 
    navigate, 
    errRef,
    login, 
    dispatch,
    Error) => {
    e.preventDefault();
    e.stopPropagation()
    if (Error === 0) {
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
