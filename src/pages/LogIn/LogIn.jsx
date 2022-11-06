import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { users } from "../../db";

import "./LogIn.scss";

export const LogIn = () => {
  let [inputErr, setInputErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // const email = e.target[0].value;
    // const password = e.target[1].value;

    try {
      users.forEach((element) => {
        // console.log(element);

        if (
          e.target[0].value === element.email &&
          e.target[1].value === element.password
        ) {
          setInputErr(false);
          navigate("/");
        } else {
          setInputErr(true);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="log-in">
      <form className="form" onSubmit={handleSubmit}>
        <h2>authorization</h2>
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        {inputErr && <span className="error">Error</span>}
        <Button func={() => null}>Log In</Button>
        <span>
          Don't have an account? Create it <Link to={"/sign-in"}>Sign In</Link>
        </span>
      </form>
    </div>
  );
};
