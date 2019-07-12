import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import Article from "../../components/Article/Article"
import { injectIntl } from "gatsby-plugin-intl"

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.bright};
`

const Index = ({ data, intl: { locale: loc } }) => {
  const {
    titlePl,
    titleFr,
    contentPl,
    contentFr,
    articleImage,
  } = data.contentfulArticles
  // Can't set defaul values with destructuring, so setting here

  const title_fr = titleFr ? titleFr : "cet article n'a pas encore été traduit"
  const title_pl = titlePl
    ? titlePl
    : "ten artykuł jeszcze nie zostal przetlumaczony"
  const content_fr = contentFr ? contentFr.json : null
  const content_pl = contentPl ? contentPl.json : null

  const article = {
    title: loc === "pl" ? title_pl : title_fr,
    content: loc === "pl" ? content_pl : content_fr,
    image: articleImage,
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
      articleImage {
        fluid(maxWidth: 600) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
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

export default injectIntl(Index)
