import { Link } from "react-router-dom";
import Header from "../components/Header";
import { IoMdArrowBack } from "react-icons/io";
import { useCountryStore } from "../zustand";

const Details = () => {
  const { activeCountry , setActiveCountryByCode} = useCountryStore();

  return (
    <div className="main-container">
      <Header title="Where in the world?" />

      <div className="flex-col-center details-container">
        {/* Back button */}
        <Link to="/" className="box back-box flex-center gap-10 fs-18">
          <IoMdArrowBack /> <small>Back</small>
        </Link>

        {activeCountry && (
          <div className="country-details flex-between flex-wrap">
            <img
              src={activeCountry?.flags?.svg}
              alt={activeCountry?.flags?.alt}
            />

            <div className="details flex-col-between gap-20">
              <h5 className="fs-28 mb-10">{activeCountry?.name?.common}s</h5>

              <div className="flex-between gap-20 mt-20 mb-10">
                <div className="flex-col-center gap-20">
                  <small className="fs-14">
                    <b>Native Name</b> :{" "}
                    {activeCountry?.name?.nativeName?.eng?.common}
                  </small>
                  <small className="fs-14">
                    <b>Population</b> : {activeCountry?.population}
                  </small>
                  <small className="fs-14">
                    <b>Region</b> : {activeCountry?.region}
                  </small>
                  <small className="fs-14">
                    <b>Sub Region</b> : {activeCountry?.subregion || "N/A"}
                  </small>
                  <small className="fs-14">
                    <b>Capital</b> : {activeCountry?.capital || "N/A"}
                  </small>
                </div>
                <div className="flex-col-center gap-20">
                  <small className="fs-14">
                    <b>Time Zone</b> : {activeCountry?.timezones[0]?.slice(0,9)}
                  </small>
                  <small className="fs-14">
                    <b>Currencies</b> :{" "}
                    {Object?.keys(activeCountry?.currencies)
                      ?.map(
                        (currency) => activeCountry?.currencies[currency]?.name
                      )
                      ?.join(",")}
                  </small>
                  <small className="fs-14">
                    <b>Languages</b> :{" "}
                    {Object?.keys(activeCountry?.languages)
                      ?.map((language) => activeCountry?.languages[language])
                      ?.join(", ")}
                  </small>
                </div>
              </div>

              {/* buttons : border countries */}
              <div className="flex-start flex-wrap gap-10 mt-20">
                <b className="fs-16">Border Countries: </b>
                {activeCountry?.borders?.length ? activeCountry?.borders?.map((border: string) => (
                  <span
                    onClick={() => setActiveCountryByCode(border)}
                    className="box country-box flex-center gap-10 fs-16"
                  >
                    <small>{border}</small>
                  </span>
                )) :<small>No Borders found for this country</small>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
