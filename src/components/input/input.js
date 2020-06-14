import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: flex;
  background: white;
  align-items: center;
  padding: 0 2rem;
  border-radius: 5px;
  flex: auto;
  i {
    margin-right: 1em;
    color: black;
  }
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  input {
    flex: auto;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    outline: none;
    ::-webkit-input-placeholder {
      color: blue;
    }
  }
`;

export default function Input({ ...props }) {
  return (
    <InputStyled>
      <i class="fas fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  );
}
