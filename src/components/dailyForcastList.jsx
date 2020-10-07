import React from "react";
import DailyForecast from "../components/dailyForecast";

const DailyForecastList = ({ dailyForecasts }) => {
  const renderedList = dailyForecasts.map((dailyForecast, index) => {
    return (
      <li key={index} className='day'>
        <DailyForecast dailyForecast={dailyForecast} />
      </li>
    );
  });

  return <div>{renderedList}</div>;
};

export default DailyForecastList;
