import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const CountryStyled = styled.div`
  cursor: pointer;
  width: 264px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);
  :hover .details {
    border-radius: 0 0 5px 5px;
    border: 1px solid var(--black);
  }
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    vertical-align: top;
    border-radius: 5px 5px 0 0;
  }
  .details {
    border-top: none;
    padding: 1.5em;
    border: 1px solid transparent;
    transition: 0.3s border;
    background: var(--white);
  }
  h2 {
    margin: 0;
    margin-botton: 1rem;
    font-size: 18px;
    font-weight: 700;
  }
  p {
    font-size: 0.9em;
    margin-botton: 0.5rem;
  }
`;

function Country({ flag, name, population, region, capital }) {
  //Route click path
  const history = useHistory();
  function handleClick() {
    history.push(`/country/${name}`);
  }

  return (
    <CountryStyled onClick={handleClick}>
      <img loading="lazy" src={flag} alt="" />
      <div className="details">
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong>
          {capital}
        </p>
      </div>
    </CountryStyled>
  );
}

export default Country;
