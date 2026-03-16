import React from 'react';
import countryDetails from '../api/countryData.json';
import "./About.css";

const About = () => {
  return (
    <>
      <div className='aboutHeading'>
        <h1>Fascinating Facts From Around the World!</h1>
      </div>

      <div className='cardsContainer'>
        {countryDetails.map((cd, index) => {
          return (
            <div className='SingleCardContainer' key={index}>
              <h2 className="countryName">{cd.name}</h2>

              <p>
                <span className='label'>Capital:</span> {cd.capital}
              </p>

              <p>
                <span className='label'>Population:</span> {cd.population}
              </p>

              <p>
                <span className='label'>Interesting Fact:</span> {cd.interesting_fact}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;