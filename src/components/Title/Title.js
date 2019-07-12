import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.primary};
  line-height: ${({ theme }) => theme.font.line.s};
  margin: 0;
  padding-bottom: 25px;
  text-align: center;
  ${({ theme }) => theme.mq.tablet} {
    max-width: 80%;
  }
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
`

const Title = ({ title }) => <StyledH2>{title}</StyledH2>

export default Title
