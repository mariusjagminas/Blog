import React from "react"
import styled from "styled-components"

const StyledDate = styled.p`
  color: ${({ theme }) => theme.secondary};
`

const Date = ({ date }) => <StyledDate>{date}</StyledDate>

export default Date
