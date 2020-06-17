import React, { useState } from "react";
import styled from "styled-components";
import Input from "../input/input";

import { useDispatch } from "react-redux";

const SearchStyled = styled.div`
  display: flex;
  position: relative;
  .close-btn {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: none;
    box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  }
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
    <SearchStyled>
      {inputValue && (
        <i className="fas fa-times-circle close-btn" onClick={clearInput}></i>
      )}
      <Input
        placeholder="Search for any country..."
        value={inputValue}
        onChange={filterByName}
      />
    </SearchStyled>
  );
}
