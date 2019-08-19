import React from "react"
import styled from "styled-components"

const StyledDate = styled.p`
  color: ${({ theme }) => theme.secondary};
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  ${({ theme }) => theme.mq.laptop} {
    padding-top: ${({ small }) => (small ? "0px" : "50px")};
    padding-bottom: ${({ small }) => (small ? "0px" : "10px")};
    font-size: ${({ small }) => (small ? "12px" : "20px")};
  }
`

const Date = ({ date, ...props }) => <StyledDate {...props}>{date}</StyledDate>

export default Date
