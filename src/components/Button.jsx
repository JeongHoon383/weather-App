import React from "react";
import "./Button.css";

const Button = ({ name, type, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={`Button Button_${type}`}>
        {name}
      </button>
    </>
  );
};

export default Button;
