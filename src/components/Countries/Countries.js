import React from 'react';
import './Countries.css'
const Countries = (props) => {
  const { name, capital, flag, population, region, area } = props.country;
  return (
    <div className="cart">
      <img src={flag} alt="hi" />
      <h1 className="card-title">{name}</h1>
      <p className="text">
        <span>population: {population}</span><br />
        <span>capital: {capital}</span> <br />
        <span>area: {area}</span><br />
        <span>region: {region}</span>
      </p>
      <button onClick={() => props.favorite(props.country)}>Add to favorite</button>
    </div>
  );
};

export default Countries;