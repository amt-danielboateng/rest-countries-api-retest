import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../features/countries/countriesSlice";
import { showAllCountries } from "../../features/countries/countriesAction";
import "./country.css";

const Country = () => {
  const { countriesData, loading, success, error } = useSelector(
    (state) => state.country
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showAllCountries());

    if (success) {
      console.log("Avoid setting component state here.");
    }

    if (error) {
      console.log(error);
    }
  }, [dispatch, error, success]);

  return (
    <section className="country-container">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        countriesData.length > 0 &&
        countriesData.map((item, index) => {
          return (
            <Link
              // onClick={() => dispatch(searchByName(item.cioc.toLowerCase()))}
              className="country-card"
              key={index} to={`/${item.cioc}`}
            >
              <img
                src={item.flags.png}
                alt={item.flags.alt}
                className="country-image"
              />
              <div className="country-content">
                <h3>{item.name.common}</h3>
                <p>
                  Population: <span>{item.population}</span>
                </p>
                <p>
                  Region: <span>{item.region}</span>
                </p>
                <p>
                  Capital: <span>{item.capital}</span>
                </p>
              </div>
            </Link>
          );
        })
      )}
    </section>
  );
};

export default Country;