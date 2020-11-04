import React, { Component } from "react";

class Weather extends Component {
  state = {};

  render() {
    const {
      temp,
      temp_max,
      temp_min,
      humidity,
      city,
      country,
      description,
      icon,
      main,
      error,
    } = this.props;

    // use {city && country && <p></p>} as a determinant of when to display temperatures
    // this means that temps won't appear until button is pressed
    return (
      <div>
        {city && country && (
          <p style={grayStyle}>
            Weather at {city}, {country}
          </p>
        )}
        {main && <h3 style={whiteStyle}>{main}</h3>}
        {icon && (
          <img
            src={icon}
            alt="Weather Icon"
            style={{
              position: "relative",
              left: "35.5%",
              top: "50%",
            }}
          ></img>
        )}
        {temp && <h3 style={whiteStyle}>Current temperature</h3>}
        {temp && <h3 style={whiteStyle}>{temp}&deg;F</h3>}
        {temp_max && temp_min && (
          <p style={grayStyle}>
            Max: {temp_max}&deg;F, Min: {temp_min}&deg;F
          </p>
        )}
        {humidity && <p style={grayStyle}>Humidity: {humidity}%</p>}
        {description && <p style={grayStyle}>Description: {description}</p>}
        {error && <h4 style={{ color: "red" }}>{error}</h4>}
      </div>
    );
  }
}

const whiteStyle = {
  color: "white",
  textAlign: "center",
};

const grayStyle = {
  color: "#b2b2b2",
  textAlign: "center",
};

export default Weather;
