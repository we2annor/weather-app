import React from "react";

const CurrentForecast = ({ forecast, weatherDetails }) => {
  return (
    <div className='ui segment'>
      <div className='ajax-section'>
        <h3>Current Forecast</h3>
        <div className='day'>
          <div className='city-name'>{forecast.city_name}</div>
          <figure>
            <img
              alt={weatherDetails.description}
              src={`/icons/${weatherDetails.icon}.png`}
            />
            <figcaption>{weatherDetails.description}</figcaption>
          </figure>
          <div></div>
          <div>
            <div>
              {Math.round(forecast.temp)}
              <sup>°C</sup>
            </div>
          </div>
          <div>
            <p>Sun rise:{forecast.sunrise}</p>
            <p>Sun set:{forecast.sunset}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentForecast;
