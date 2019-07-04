import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Article from "../components/Article/Article"
import Sidebar from "../components/Sidebar/Sidebar"

const Wrapper = styled.div`
  max-width: 650px;
  margin: 0 auto;
  display: flex;
`

const Index = ({ data, intl }) => {
  return (
    <MainTemplate>
      <Wrapper>
        <Article />
        <Sidebar />
      </Wrapper>
    </MainTemplate>
  )
}

export default injectIntl(Index)
