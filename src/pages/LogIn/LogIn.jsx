import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";

import "./LogIn.scss";

export const LogIn = () => {
  let [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(`email: ${email}\npassword: ${password}`);
  };

  return (
    <div className="log-in">
      <form className="form" onSubmit={handleSubmit}>
        <h2>authorization</h2>
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Button func={() => null}>Log In</Button>
        <span>
          Don't have an account? Create it <Link to={"/sign-in"}>Sign In</Link>
        </span>
      </form>
    </div>
  );
};
