import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "./SignIn.scss";

export const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="form">
        <h2>Registration</h2>
        <Input type={"text"} placeholder={"Name"} />
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Button func={() => null}>Sign In</Button>
        <span>
          Do you have an account? Go into it<Link to={"/log-in"}>Log in</Link>
        </span>
      </div>
    </div>
  );
};
