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
    font-size: 14px;
  }
  .night-mode {
    .moon {
      transform: rotate(-30deg);
      display: inline-flex;
      margin-right: 10px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <Link to="/">
            <h1>Country Searcher</h1>
          </Link>
          <div className="night-mode">
            <p onClick>
              <div className="moon">
                <i class="far fa-moon"></i>
                <i class="fas fa-moon"></i>
              </div>
              Night Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}
