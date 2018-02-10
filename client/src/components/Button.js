import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  line-height: 40px;
  font-size: 12px;
  background-color: #333;
  color: #fff;
  margin: 18px 0;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }

  &:active, &:visited, &:focus {
    background-color: #333;
    outline: none;
  }
`

export default Button
