import React from "react";
import Button from "./Button";
import "./ButtonBox.css";

const ButtonBox = ({ cities, setCity, handleChangeCity }) => {
  return (
    <div className="ButtonBox">
      <Button
        type={setCity === "" ? selected : ""}
        name="Current Location"
        onClick={() => handleChangeCity("current")}
      />
      {cities.map((city) => (
        <Button
          type={setCity === city ? selected : ""}
          name={city}
          key={city}
          onClick={() => handleChangeCity(city)}
        />
      ))}
    </div>
  );
};

export default ButtonBox;
