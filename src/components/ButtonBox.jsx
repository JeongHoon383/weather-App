import React from "react";
import Button from "./Button";

const ButtonBox = () => {
  return (
    <div className="ButtonBox">
      <Button name="Current Location" />
      <Button name="hanoi" />
      <Button name="paris" />
      <Button name="new york" />
      <Button name="seoul" />
    </div>
  );
};

export default ButtonBox;
