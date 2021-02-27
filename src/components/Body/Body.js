import React, { useEffect, useState } from 'react';
import Countries from '../Countries/Countries';
import Favorite from '../Favorite/Favorite';
import './Body.css'
const Body = () => {
  const [countries, setCountries] = useState([])
  useEffect(
    () => {
      fetch("https://restcountries.eu/rest/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []
  )
  const [favorite, setFavorite] = useState([])
  const handleAddFav = (fav) => {
    const newFav = [...favorite, fav];
    setFavorite(newFav);
  }

  return (
    <div className="div-body">
      <div className="favorite">
        <Favorite favorite={favorite}></Favorite>
      </div>
      <div className="all-country">
        {countries.map(country => <Countries key={country.name} favorite={handleAddFav} country={country}></Countries>)}
      </div>
    </div>
  );
};

export default Body;