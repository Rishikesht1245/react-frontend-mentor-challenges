import React, { useEffect } from "react";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import CountryCard from "../components/CountryCard";
import { Country, useCountryStore } from "../zustand";
import Loader from "../components/Loader";

const Home = () => {
  const { filteredCountries, loadCountries, isLoading, error } = useCountryStore();

  useEffect(() => {
    loadCountries();
  }, []);
  return (
    <div className="main-container">
      <Header title="Where in the world?" />
      <SearchFilter />

      {isLoading && <Loader/>}
      {error && <span>{error}</span>}

      {!isLoading && !error && (
        <div className="card-container gap-50">
          {filteredCountries?.map((country: Country) => (
            <CountryCard country={country} key={country?.name?.common} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
