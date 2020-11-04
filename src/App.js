import React from "react";
import "./App.css";
import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_key = "075b4d671508fb5a62aa22a42e8d5542";

class App extends React.Component {
  // gets the weather from the API - async () is needed to transfer info
  // await fetch() is used to fetch the data
  // ${DYNAMIC STRING} is used to substitute in information to the website
  // await *SOMETHING THAT HAS BEEN FETCHED*.json() makes the format more readable
  getWeather = async (e) => {
    // e.the below line prevents a full page refresh after submitting form
    // e also has the power to remember the form fields
    e.preventDefault();

    // remember the city and the country AND THIS SYNTAX
    // basically, e-event, elements-parts of the event (two inputs and
    // a button from Weather.js), names (city & country), and value of
    // those variables
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}&units=imperial`
    );
    const data = await API_call.json();
    if (city && country) {
      this.setState({
        temp: data.main.temp,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        main: data.weather[0].main,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
        error: "",
      });
    } else {
      this.setState({
        error: "Please insert value into fields",
      });
    }
  };

  state = {
    temp: undefined,
    temp_min: undefined,
    temp_max: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    main: undefined,
    icon: undefined,
    error: undefined,
  };

  render() {
    const {
      temp,
      temp_min,
      temp_max,
      city,
      country,
      humidity,
      description,
      main,
      icon,
      error,
    } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temp={temp}
                    temp_min={temp_min}
                    temp_max={temp_max}
                    city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    main={main}
                    icon={icon}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// can only return one <div>

export default App;
