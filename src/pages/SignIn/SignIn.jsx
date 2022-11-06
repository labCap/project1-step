import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { users } from "../../db";

import "./SignIn.scss";

export const SignIn = () => {
  let [inputErr, setInputErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      if (e.target[0].value && e.target[1].value && e.target[2].value) {
        let user = { name: name, email: email, password: password };
        users.push(user);

        navigate("/");
      } else {
        setInputErr(true);
      }
      console.log(users);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="sign-in">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration</h2>

        <Input type={"text"} placeholder={"Name"} />
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        {inputErr && <span className="error">Error</span>}
        <Button func={() => null}>Sign In</Button>
        <span>
          Do you have an account? Go into it<Link to={"/log-in"}>Log in</Link>
        </span>
      </form>
    </div>
  );
};
