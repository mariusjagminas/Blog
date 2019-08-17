import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before,
  &:after {
    content: "";
    height: 1px;
    background: ${({ theme }) => theme.grey};
    flex: 1;
  }
`
const StyledH3 = styled.h3`
  margin: 0 10px;
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.font.family.second};
  font-size: ${({ theme }) => theme.font.size.ms};
  letter-spacing: 2px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.primaryLight};
`

const H3Sidebar = ({ title }) => (
  <Wrapper>
    <StyledH3>{title}</StyledH3>
  </Wrapper>
)
// FIXME: text is overlaping line
export default H3Sidebar
