import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import Article from "../../components/Article/Article"

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  background: ${({ theme }) => theme.bright};
`

const Index = ({ data }) => {
  const { titlePl, titleFr, contentPl, contentFr } = data.contentfulArticles

  const article = {
    title: {
      pl: titlePl || `niema artikulu ${titleFr}`,
      fr: titleFr || `no article ${titlePl}`,
    },
    content: {
      pl: contentPl ? contentPl.json : "",
      fr: contentFr ? contentFr.json : "",
    },
  }

  return (
    <MainTemplate>
      <Wrapper>
        <Article article={article} />
        <Sidebar />
      </Wrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query Article($slug: String) {
    contentfulArticles(slug: { eq: $slug }) {
      date
      titlePl
      contentPl {
        json
      }
      titleFr
      contentFr {
        json
      }
    }
  }
`

export default Index
