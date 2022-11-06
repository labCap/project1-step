import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import "./SignIn.scss";

export const SignIn = () => {
  let [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log(`name: ${name}\nemail: ${email}\npassword: ${password}`);
  };

  return (
    <div className="sign-in">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration</h2>
        <Input type={"text"} placeholder={"Name"} />
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Button func={() => null}>Sign In</Button>
        <span>
          Do you have an account? Go into it<Link to={"/log-in"}>Log in</Link>
        </span>
      </form>
    </div>
  );
};
