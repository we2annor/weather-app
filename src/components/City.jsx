import React, { useState, useEffect } from "react";
import { KEY } from "../apis/weatherio";
import axios from "axios";
import DailyForecastList from "./DailyForecastList";

const City = ({ api, city_name, filter }) => {
  const [currentData, setCurrentData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const API = `${api}&key=${KEY}`;

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setLoaded(true);
        setCurrentData(result.data.data || []);
      })
      .catch((reject) => {
        setLoaded(true);
        setError(reject);
        setCurrentData([]);
      });
  }, [API]);

  const renderContent = () => {
    if (loaded) {
      return (
        <div className='ui raised segment city-container'>
          <h3 className='ui header'>{city_name}</h3>
          <div className='div-section'>
            <div className='container'>
              <ul className='cities'>
                <DailyForecastList
                  dailyForecasts={currentData}
                  filter={filter}
                />
              </ul>
            </div>
          </div>
        </div>
      );
    }
    if (error) {
      return <div className='error-message'>Sorry an error occured</div>;
    }
  };
  return <>{renderContent()}</>;
};

export default City;
