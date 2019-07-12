import React from "react"
import styled from "styled-components"

const StyledDate = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  ${({ theme }) => theme.mq.laptop} {
    padding-top: 50px;
    padding-bottom: 10px;
  }
`

const Date = ({ date }) => <StyledDate>{date}</StyledDate>

export default Date
