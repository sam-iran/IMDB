import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
  const [weathers, setWeather] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/current.json?key=1c34dc13424b469794e72946242007&q=Kolkata&aqi=no`
      )
      .then(function (res) {
        setWeather(res.data.current);
      });
  }, []);
  return (
    <div className="absolute right-0 top-14">
      <div className=" bg-gray-900/40 w-[280px] rounded-2xl p-2 m-2 font-bold text-white shadow-2xl shadow-black">
        <div className="text-white flex ">
          <img src="./src/assets/clear_day.svg" className="pr-4"></img>
          {weathers.temp_c} degree celcius
        </div>

        <div className="flex">
          <img src="./src/assets/clear_day.svg" className="pr-4"></img>
          {weathers.feelslike_c} degree celcius
        </div>

        <div className="flex">
          <img src="./src/assets/air.svg" className="pr-4"></img>
          <p>{weathers.wind_kph} Km/h</p>
        </div>

        <div className="flex">
          <img src="./src/assets/humidity.svg" className="pr-4"></img>
          {weathers.humidity}%
        </div>

        <div className="flex">
          <img src="./src/assets/rainy.svg" className="pr-4"></img>
          <h3>UV index : {weathers.uv} high</h3>
        </div>
      </div>
    </div>
  );
}

export default Weather;
