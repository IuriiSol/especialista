import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import classes from "./auth.module.css"

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  return (
    <div className={classes.wrap}>
      <form className={classes.form} onSubmit={onSubmit}>
        <h2> Login </h2>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;