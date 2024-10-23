import { useEffect } from "react";
import { Country, useCountryStore } from "./zustand";
import Header from "./components/Header";

function App() {
  const { countries, loadCountries, isLoading, error } = useCountryStore();

  useEffect(() => {
    loadCountries();
  }, []);

  return (
    <div className="main-container">
      <Header title="Where in the world?"/>
      
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}

      {!isLoading && !error && (
        <ul>
          {countries?.map((country: Country) => (
            <>
              <small>{country?.name?.common}</small>
              <br />
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
