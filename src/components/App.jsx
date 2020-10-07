import React, { Component } from "react";
import SearchBar from "../components/searchBar";
import weatherio, { getBaseAPI } from "../apis/weatherio";
import DailyForecastList from "../components/dailyForcastList";
import Home from "../pages/home";

class App extends Component {
  state = { dailyForecasts: [], data: [] };

  onTermSubmit = async (term) => {
    const API = getBaseAPI("https://api.weatherbit.io/v2.0/forecast/daily");
    const response = await weatherio.get(API, { params: { city: term } });

    this.setState({ dailyForecasts: response.data.data, data: response.data });
  };

  render() {
    const { dailyForecasts, data } = this.state;
    return (
      <div className='ui container'>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <Home />
        <DailyForecastList dailyForecasts={dailyForecasts} data={data} />
      </div>
    );
  }
}

export default App;
