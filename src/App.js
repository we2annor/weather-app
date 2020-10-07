import React, { useState, useEffect } from "react";
import LoadData from "./data/loadData";
import { APIKey } from "./apis/weatherio";
import axios from "axios";
import "./App.css";

const App = ({ api }) => {
  const API = `${api}&key=${APIKey}`;
  const [apiLoaded, setApiLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setApiLoaded(true);
        setData(result.data.data || []);
        setWeather(result.data.data[0].weather || {});
      })
      .catch((reject) => {
        setApiLoaded(true);
        setError(reject);
        setData([]);
        setWeather({});
      });
  }, [API]);

  const renderContent = () => {
    return (
      <LoadData
        data={data}
        weather={weather}
        isLoading={apiLoaded}
        error={error}
      />
    );
  };
  return <div className='App'>{renderContent()}</div>;
};

export default App;
