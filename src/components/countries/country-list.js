import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Country from "./country";

const CountryListStyled = styled.div`
  display: grid;
  grid-row-gap: 2.3em;
  justify-content: center;
  background: var(--background);
  border: 1px solid red;
  padding: 4em 2em;
`;

function CountryList() {
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    fetch("http://restcountries.eu/rest/v2/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCountryList(data);
        console.log(data);
      })
      .catch((err) => console.log("Error"));
  }, []);
  return (
    <CountryListStyled>
      {countryList.map((country) => {
        return (
          <Country
            flag="https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg"
            name="Corea the best"
            population={500000}
            region="Asia"
            capital="Pyongian"
          />
        );
      })}

      <Country
        flag="https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg"
        name="Corea the best"
        population={500000}
        region="Asia"
        capital="Pyongian"
      />
    </CountryListStyled>
  );
}

export default CountryList;
