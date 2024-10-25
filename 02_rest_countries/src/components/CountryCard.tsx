import { Country, useCountryStore } from "../zustand";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {

  const {setActiveCountry} = useCountryStore();

  const navigate = useNavigate()

  const handleCardClick = () => {
      setActiveCountry(country);
      navigate("/details");
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <div className="flex-col-center">
        <img
          className="card-img"
          src={country?.flags?.svg}
          alt={country?.flags?.alt}
        />

        <div className="flex-col-center p-30 gap-10">
          <b className="fs-18 mb-10">{country?.name?.common}</b>

          <small className="fs-14">
            <b>Population</b> : {country?.population}
          </small>
          <small className="fs-14">
            <b>Region</b> : {country?.region}
          </small>
          <small className="fs-14">
            <b>Capital</b> : {country?.capital}
          </small>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
