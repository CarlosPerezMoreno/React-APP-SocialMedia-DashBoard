import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper/wrapper";

const HeaderStyled = styled.div``;

export default function Header() {
  return (
    <HeaderStyled>
      <Wrapper>
        <div className="content">
          <h1>Country Searcher</h1>
          <div className="night-mode">
            <p onClick>
              {" "}
              <i class="far fa-moon"></i>
              Night Mode
            </p>
          </div>
        </div>
      </Wrapper>
    </HeaderStyled>
  );
}
