import React from "react"
import styled from "styled-components"

const StyledH3 = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.second};
  font-size: ${({ theme }) => theme.font.size.ms};
  letter-spacing: 2px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.primaryLight};
  position: relative;

  &:before,
  &:after {
    position: absolute;
    content: "";
    height: 1px;
    width: 50px;
    top: 13px;
    background: ${({ theme }) => theme.grey};
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }
`

const H3Sidebar = ({ title }) => <StyledH3>{title}</StyledH3>
// FIXME: text is overlaping line
export default H3Sidebar
