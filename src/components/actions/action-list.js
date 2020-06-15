import React from "react";
import styled from "styled-components";
import Search from "../search/search";

import { Region as FilterByRegion } from "../regions/region";
import Wrapper from "../wrapper/wrapper";

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
`;

export default function ActionList() {
  return (
    <ActionListStyled>
      <Wrapper>
        <div className="grid">
          <Search />
          <FilterByRegion />
        </div>
      </Wrapper>
    </ActionListStyled>
  );
}
