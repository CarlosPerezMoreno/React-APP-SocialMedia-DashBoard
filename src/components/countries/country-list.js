import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  border: 1px solid red;
  padding: 4em 2em;
`;

function CountryList() {
  const [inputValue, setValue] = useState("");
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if ("" !== state.filterByRegion) {
      return state.countryFilteredByRegion;
    }

    return state.countryList;
  });

  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: data,
        });
        console.log(data.lenght);
      })
      .catch((err) => console.log("Error"));
  }, []);
  return (
    <CountryListStyled>
      {countryList.map(({ flag, name, population, region, capital }) => {
        return (
          <Country
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </CountryListStyled>
  );
}

export default CountryList;
