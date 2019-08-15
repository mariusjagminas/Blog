import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"

const TextWrapper = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`

const Index = ({ data, intl }) => {
  return (
    <MainTemplate>
      <TextWrapper>
        <h3>ABOUT_ME_PAGE</h3>
      </TextWrapper>
    </MainTemplate>
  )
}

export default injectIntl(Index)
