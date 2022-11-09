import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js";

import { Button } from "../../components/Button/Button";

import "./LogIn.scss";

export const LogIn = () => {
  let [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="log-in">
      <form className="form" onSubmit={handleSubmit}>
        <h2>authorization</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {err && <span className="error">Error</span>}
        <Button func={() => null}>Log In</Button>
        <span>
          Don't have an account? Create it <Link to={"/sign-in"}>Sign In</Link>
        </span>
      </form>
    </div>
  );
};
