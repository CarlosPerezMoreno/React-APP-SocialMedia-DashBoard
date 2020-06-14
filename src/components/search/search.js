import React, { useState } from "react";
import styled from "styled-components";
import Input from "../input/input";

import { useDispatch } from "react-redux";

const SearchStyled = styled.div`
  display: flex;
`;

export default function Search() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const filterByName = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: e.target.value,
    });
  };
  const clearInput = () => {
    dispatch({
      type: "SET_COUNTRY_BY_NAME",
      payload: "",
    });
    setInputValue("");
  };
  return (
    <div>
      <SearchStyled>
        <Input
          placeholder="Search for any country..."
          value={inputValue}
          onChange={filterByName}
        />
        {inputValue && <button onClick={clearInput}>Close</button>}
      </SearchStyled>
    </div>
  );
}
