import React from "react";
import WeatherBox from "../components/WeatherBox";
import ButtonBox from "../components/ButtonBox";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <WeatherBox />
      <ButtonBox />
    </div>
  );
};

export default Home;
