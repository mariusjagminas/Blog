import React from "react"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.light};
  ${({ theme }) => theme.mq.laptop} {
    height: 140px;
  }
`

const Title = styled.h1`
  font-size: 18px;
  padding: 0 10px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.family.second};
  ${({ theme }) => theme.mq.laptop} {
    font-size: 50px;
  }
`

const Banner = ({ intl }) => {
 
  return (
    <Wrapper>
      <Title>{intl.formatMessage({ id: "banner.title" })}</Title>
    </Wrapper>
  )
}

export default injectIntl(Banner)
