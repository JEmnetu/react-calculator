import React from "react";

const isOperator = (val) => {
  return !isNaN(val) || val === "." || val === "=";
};
const Button = (props) => {
  return (
    <div
      className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
      }`}
      onClick={() => props.add(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Button;
