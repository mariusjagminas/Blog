import React from "react"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.secondaryLight};
  ${({ theme }) => theme.mq.laptop} {
    height: 175px;

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 175px;
      width: 100%;
      height: 165px;
      background: ${({ theme }) => theme.secondaryLight};
    }
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.l};
  text-align: center;
  padding: 0 10px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.family.second};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.xl};
  }
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.xxl};
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
