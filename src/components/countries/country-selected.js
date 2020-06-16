import React from "react";
import styled from "styled-components";

const CountrySelectedStyled = styled.div``;

export default function CountrySelected({ flag }) {
  return (
    <CountrySelectedStyled>
      <img src={flag} alt="" />
    </CountrySelectedStyled>
  );
}
