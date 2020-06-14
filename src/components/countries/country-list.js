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
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if ("" !== state.filterByRegion) {
      return state.countryFilteredByRegion;
    }

    if (countryListByName.length > 0) {
      return countryListByName;
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
  }, [dispatch]);

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: e.target.value,
    });
  };
  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });
    setInputValue("");
  };

  return (
    <CountryListStyled>
      <input type="text" value={inputValue} onChange={filterByName} />
      {inputValue && <button onClick={clearInput}>Close</button>}
      {countryListByName.lenght === 0 && inputValue && (
        <p>
          <strong>{inputValue}</strong> not found in directory
        </p>
      )}
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
