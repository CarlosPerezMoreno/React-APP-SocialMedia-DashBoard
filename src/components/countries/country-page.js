import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Wrapper from "../wrapper/wrapper";
import { useSelector } from "react-redux";
import CountrySelected from "../countries/country-selected";

const CountryPageStyled = styled.div``;

export default function CountryPage({ match }) {
  let DBcountry = useSelector((state) =>
    state.countryList.find(
      (item) => item.name === match.params.id.replace("-", " ")
    )
  );

  const [country, setCountry] = useState(DBcountry);

  useEffect(() => {
    if (!country) {
      fetch(`https://restcountries.eu/rest/v2/name/${match.params.id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setCountry(data[0]);
        });
    }
  }, [country, match.params.id]);
  return (
    <CountryPageStyled>
      <Wrapper>
        <CountrySelected {...country} />
        {match.params.id}
      </Wrapper>
    </CountryPageStyled>
  );
}
