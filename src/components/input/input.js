import React from "react";
import styled from "styled-components";

const InputStyled = styled.label`
  display: inline-flex;
  background: var(--white);
  align-items: center;
  padding: 0 2rem;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  flex: 1;
  i {
    margin-right: 1em;
    color: black;
  }
  input {
    flex: 1;
    border: none;
    height: 48px;
    line-height: 48px;
    font-size: 0.7em;
    color: var(--black);
    background: var(--white);
    outline: 0;
    &::-webkit-input-placeholder {
      color: blue;
    }
  }
`;

export default function Input({ ...props }) {
  return (
    <InputStyled>
      <i className="fas fa-search"></i>
      <input type="text" {...props} />
    </InputStyled>
  );
}
