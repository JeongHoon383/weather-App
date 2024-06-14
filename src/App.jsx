import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const curWeatherData = async () => {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6de406e083c681266b9287653186f07`
        );
        const result = res.json();
        return result;
      };
      curWeatherData().then((res) => setData(res));
    });
  }, []);

  console.log(data);

  if (!data) {
    return <div>데이터 로딩중...</div>;
  }

  return <div>weather App</div>;
}

export default App;
