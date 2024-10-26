import { useEffect } from "react";
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

      {filteredCountries?.length  > 0 && (
        <div className="card-container gap-50 mb-10">
          {filteredCountries?.map((country: Country) => (
            <CountryCard country={country} key={country?.name?.common} />
          ))}
        </div>
      )}

      {!isLoading && !filteredCountries?.length &&  (
        <span className="w-100 h-100 flex-center fs-16">No Countries Found.</span>
      )}
    </div>
  );
};

export default Home;
