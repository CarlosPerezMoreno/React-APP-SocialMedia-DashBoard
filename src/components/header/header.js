import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper/wrapper";
import { Link } from "react-router-dom";

const HeaderStyled = styled.div`
  background: var(--white);
  margin-bottom: 1em;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  .content {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-size: 24px;
  }
  a {
    text-decoration: none;
    color: var(--dark);
  }
  .night-mode {
    cursor: pointer;

    .moon {
      transform: rotate(-30deg);
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 1rem;
      font-weight: 600;
    }
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 3em;
  }
`;

export default function Header({ setNightMode, nightMode }) {
  function handleClick() {
    setNightMode(!nightMode);
  }
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Country Searcher</h1>
          </Link>
          <div className="night-mode">
            <p onClick={handleClick}>
              <span className="moon">
                {nightMode ? (
                  <i class="far fa-moon"></i>
                ) : (
                  <i class="fas fa-moon"></i>
                )}
              </span>
              Night Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}
