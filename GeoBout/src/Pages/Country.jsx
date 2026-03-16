import React, { useTransition } from 'react';
import { useState, useEffect } from 'react';
import { SearchFilter } from '../Components/SearchFilter';
import { getCountryData } from '../api/postapi';
import CountryCard from '../Components/CountryCard';




const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <h1>Still Loading....</h1>;

  const searchCountry = (country) => {
    return country.name.common
      .toLowerCase()
      .includes(search.toLowerCase());
  };

  const filterRegion = (country) => {
    if (filter === "all") return true;
    return country.region === filter;
  };

  const filteredCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <>
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      />

      <section className="countrySection">
        <ul className="countryList">
          {filteredCountries.map((curCountry, index) => (
            <CountryCard key={index} country={curCountry} />
          ))}
        </ul>
      </section>
    </>
  );
};


export default Country;