import React from "react";
import "./WeatherBox.css";

const WeatherBox = () => {
  return (
    <div className="WeatherBox">
      <div>현재 지역 이름</div>
      <div>섭씨/화씨</div>
      <div>날씨 상태</div>
    </div>
  );
};

export default WeatherBox;
