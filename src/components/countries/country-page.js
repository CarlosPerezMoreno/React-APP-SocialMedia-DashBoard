import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper/wrapper";

const CountryPageStyled = styled.div``;

export default function CountryPage({ match }) {
  return <CountryPageStyled>Country Page: {match.params.id}</CountryPageStyled>;
}
