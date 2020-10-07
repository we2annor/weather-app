import React from "react";

const LoadData = ({ data, weather, isLoading, error }) => {
  //should be removed
  const getContent = () => {
    console.log("data from loadData", data, weather);
  };

  const getPageContent = () => {
    let pageContent = "";
    if (isLoading) {
      pageContent = "...loading! please wait";
    }

    if (error) {
      pageContent = `error occured loading this page. ${error}`;
      return;
    }

    if (!data) {
      pageContent = "no weather data found";
      return;
    } else {
      pageContent = (
        <div className='weather-info-container'>
          <div className='weather-info'>
            <h3 className='location'>{data.city_name}</h3>
            <p className='description'>{weather.description}</p>
            <img alt={weather.description} src={`/icons/${weather.icon}.png`} />
          </div>
          <div className='stat'>
            <p className='temperature'>{data.temp}</p>
            <div>
              <p>H:{data.high_temp}</p>
              <p>L:{data.low_temp}</p>
            </div>
          </div>
          {getContent()}
        </div>
      );
    }

    return pageContent;
  };

  return <div>{getPageContent()}</div>;
};

export default LoadData;
