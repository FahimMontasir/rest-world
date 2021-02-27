import React from 'react';
import './Favorite.css'
const Favorite = (props) => {
  const favArr = props.favorite;
  const totalPopulation = favArr.reduce((total, fav) => total + fav.population, 0)
  return (
    <div>
      <h4>My favorite country list: {favArr.length}</h4>
      <div className="list">
        <ul>
          {favArr.map(fav => <li key={fav.name}><img src={fav.flag} alt="" /> {fav.name}</li>)}
        </ul>
        <ul>
          {favArr.map(fav => <li key={fav.name}>{fav.population}</li>)}
        </ul>
      </div>
      <h5>total population: {totalPopulation}</h5>
    </div>
  );
};

export default Favorite;