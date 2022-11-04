import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import "./SignIn.scss";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="form">
        <h2>Registration</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button func={() => null}>Sign In</Button>
        <span>
          Do you have an account? Go into it<Link to={"/log-in"}>Log in</Link>
        </span>
      </div>
    </div>
  );
};
