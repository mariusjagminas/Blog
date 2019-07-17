import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bright};
`

const Index = ({ data, pageContext, intl: { locale: loc } }) => {
  const allArticles = data.allContentfulArticles.edges

  // Add data to object considering location
  const x = allArticles.map(article => {
    return { title: loc === "pl" ? article.node.titlePl : article.node.titleFr }
  })
  // Filter for not empty titles
  const articlesLoc = x.filter(obj => obj.title)
  console.log(articlesLoc)

  return (
    <MainTemplate>
      <Wrapper>
        {articlesLoc.map((item, i) => (
          <p>{`${item.title}nr${i}`}</p>
        ))}
        <Sidebar />
      </Wrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query articleList {
    allContentfulArticles(sort: { fields: date, order: DESC }) {
      edges {
        node {
          slug
          titlePl
          titleFr
        }
      }
    }
  }
`

export default injectIntl(Index)
