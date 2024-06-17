import React from "react";

const Button = ({ name, type }) => {
  return <div className={`Button Button_${type}`}>{name}</div>;
};

export default Button;
