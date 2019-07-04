import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.primary};
`

const Title = ({ title }) => <StyledH2>{title}</StyledH2>

export default Title
