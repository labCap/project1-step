import React from "react";
import "./Button.scss";

export const Button = ({ children, func, className }) => {
  return (
    <button className={className} onClick={func}>
      <span>{children}</span>
    </button>
  );
};
