import React from 'react';
import "./CountryCard.css"
import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
  if (!country) return null;

  const {
    flags,
    name,
    population,
    region,
    capital
  } = country;

  return (
    <li className="countryCard">
      <div className="countryCardImage">
        <img 
          src={flags?.svg} 
          alt={flags?.alt || name?.common || "Country flag"} 
        />
      </div>

      <div className="countryCardContent">
        <h2 className="countryTitle">{name?.common || "Unknown Country"}</h2>

        <p>
          <span>Capital:</span> {capital?.[0] || "N/A"}
        </p>

        <p>
          <span>Region:</span> {region || "N/A"}
        </p>

        <p>
          <span>Population:</span>{" "}
          {typeof population === "number" 
            ? population.toLocaleString() 
            : "N/A"}
        </p>

        <NavLink to = {`/country/${name.common}`} >
            <button>Read More</button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;
