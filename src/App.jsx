import { createContext, useEffect, useState } from "react";
import ButtonBox from "./components/ButtonBox";
import WeatherBox from "./components/WeatherBox";
import "./App.css";
import ClipLoader from "react-spinners/ClipLoader";

// 버튼을 클릭했을 때 각 나라별 날씨 정보가 나오게
// 각 나라별 정보 가져오기
// 버튼 클릭 이벤트 핸들러 가져오기
// 로딩 스피너
// current Location 눌렀을 때 현재 위치 날씨가 나오게
// current Location 눌렀을 때 getCurrentLocation 함수가 실행되면 됨.

export const weatherData = createContext();

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const cities = ["paris", "seoul", "hanoi", "new york"];
  const [loading, setLoading] = useState(true);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c6de406e083c681266b9287653186f07&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
    setLoading(false);
  };

  const getCitiesLocation = async () => {
    setLoading(true);
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c6de406e083c681266b9287653186f07&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == "") {
      getCurrentLocation();
    } else {
      getCitiesLocation();
    }
  }, [city]);

  const handleChangeCity = (curCity) => {
    if (curCity === "current") {
      setCity("");
    } else {
      setCity(curCity);
    }
  };

  return (
    <weatherData.Provider value={weather}>
      {loading ? (
        <div className="spinner">
          <ClipLoader
            color="#f88c6b"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox />
          <ButtonBox
            cities={cities}
            city={city}
            handleChangeCity={handleChangeCity}
          />
        </div>
      )}
    </weatherData.Provider>
  );
}

export default App;
