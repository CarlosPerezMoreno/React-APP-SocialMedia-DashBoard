import React, { useEffect } from "react";
import styled from "styled-components";
import Country from "./country";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../wrapper/wrapper";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  grid-auto-flow: columns;
  grid-column-gap: 66px;
  grid-template-columns: repeat(auto-fill, 270px);
  justify-content: center;
  background: var(--background);
  padding: 3em 0;
`;

function CountryList() {
  const dispatch = useDispatch();

  const countryListByName = useSelector((state) => state.countryListByName);

  const countryList = useSelector((state) => {
    if ("" !== state.filterByRegion && countryListByName.length === 0) {
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

  return (
    <Wrapper>
      <CountryListStyled>
        {countryList.map(
          ({
            flag,
            name,
            population,
            region,
            capital,
            nativeName,
            cioc,
            alpha2Code,
          }) => {
            return (
              <Country
                key={name}
                flag={flag}
                name={name}
                population={population}
                region={region}
                capital={capital}
                nativeName={nativeName}
                cioc={cioc}
                alpha2Code={alpha2Code}
              />
            );
          }
        )}
      </CountryListStyled>
    </Wrapper>
  );
}

export default CountryList;
