import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button/Button";

import "./LogIn.scss";

export const LogIn = () => {
  return (
    <div className="log-in">
      <div className="form">
        <h2>authorization</h2>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button func={() => null}>Log In</Button>
        <span>
          Don't have an account? Create it <Link to={"/sign-in"}>Sign In</Link>
        </span>
      </div>
    </div>
  );
};