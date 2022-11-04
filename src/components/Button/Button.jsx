import React from "react";
import "./Button.scss";

export const Button = ({ children, func }) => {
  return (
    <button className="button" onClick={func}>
      <span>{children}</span>
    </button>
  );
};
