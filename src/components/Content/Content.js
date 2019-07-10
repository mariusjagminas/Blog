import React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.primary};
`
const Content = ({ content }) => <StyledParagraph>{content}</StyledParagraph>

export default Content


