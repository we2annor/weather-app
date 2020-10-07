import React, { useState, useEffect } from "react";
import { KEY } from "../apis/weatherio";
import CurrentForecast from "../components/currentForecast";
import axios from "axios";

const Home = () => {
  const [weatherDetails, setWeatherDetails] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const API = `https://api.weatherbit.io/v2.0/current?city=London&country=UK&key=${KEY}`;

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setLoaded(true);
        setCurrentData(result.data.data[0] || []);
        setWeatherDetails(result.data.data[0].weather || []);
      })
      .catch((reject) => {
        setLoaded(true);
        setError(reject);
        setCurrentData([]);
        setWeatherDetails([]);
      });
  }, [API]);

  const renderContent = () => {
    if (loaded) {
      return (
        <CurrentForecast
          forecast={currentData}
          weatherDetails={weatherDetails}
        />
      );
    }
    if (error) {
      return `Sorry an error occured ${error}`;
    }
  };

  return (
    <>
      <p>Current Forecast</p>
      {renderContent()}
    </>
  );
};

export default Home;
