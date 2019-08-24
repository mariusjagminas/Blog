import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import { MainContainer, MainWrapper } from "../assets/styles/layout"
import Sidebar from "../components/Sidebar/Sidebar"
import { graphql } from "gatsby"
import ArticleExcerpt from "../components/ArticleExcerpt/ArticleExcerpt"

const Index = ({ data }) => {
  return (
    <MainTemplate>
      <MainContainer>
        <MainWrapper>
          <ArticleExcerpt
            document={data.articles.edges[0].node.content.json}
            length={360}
          />
        </MainWrapper>
        <Sidebar />
      </MainContainer>
    </MainTemplate>
  )
}

export default Index

export const query = graphql`
  query historyOfTheater {
    articles: allContentfulHistoryOfTheater(
      sort: { fields: date, order: ASC }
    ) {
      edges {
        node {
          title
          image {
            fluid(maxWidth: 600) {
              src
            }
          }
          content {
            json
          }
        }
      }
    }
  }
`
