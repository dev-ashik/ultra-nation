import React from "react";

const country = (props) => {
  const { name, capital, population, flag } = props.country;
  const flagStyle = { height: "60px", width: "100px" };
  const countryStyle = {
    border: "1px solid lightsalmon",
    margin: "10px",
    padding: "10px",
  };

  const handleAddToCountry = props.handleAddToCountry;

  return (
    <div style={countryStyle}>
      <h2>{name}</h2>
      <img style={flagStyle} src={flag} alt="" />
      <h3>{capital}</h3>
      <h3>{population}</h3>
      <button onClick={() => handleAddToCountry(props.country)} >Add Cuntry</button>
    </div>
  );
};

export default country;
