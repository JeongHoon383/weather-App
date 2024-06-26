import React from "react";
import Button from "./Button";
import "./ButtonBox.css";

const ButtonBox = ({ cities, city, handleChangeCity }) => {
  return (
    <div className="ButtonBox">
      <Button
        type={city === "" ? "selected" : ""}
        name="Current Location"
        onClick={() => handleChangeCity("current")}
      />
      {cities.map((curCity) => (
        <Button
          type={city === curCity ? "selected" : ""}
          name={curCity}
          key={curCity}
          onClick={() => handleChangeCity(curCity)}
        />
      ))}
    </div>
  );
};

export default ButtonBox;
