import { useEffect } from "react";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6de406e083c681266b9287653186f07`;
    let res = await fetch(url);
    let data = await res.json();
    console.log("data", data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
