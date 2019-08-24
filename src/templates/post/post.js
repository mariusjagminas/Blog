import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import Article from "../../components/Article/Article"
import { injectIntl } from "gatsby-plugin-intl"
import ArticleNotAvailable from "../../components/ArticleNotAvailable/ArticleNotAvailable"
const Container = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  background: ${({ theme }) => theme.bright};
  ${({ theme }) => theme.mq.laptop} {
    padding-left: 80px;
  }
`

const Index = ({ data, intl: { locale } }) => {
  const article = {
    title: data[locale].title || null,
    content: data[locale].content ? data[locale].content.json : null,
    image: data.node.articleImage
      ? data.node.articleImage.fluid
      : data.file.childImageSharp.fluid,
    date: data.node.date,
  }

  return (
    <MainTemplate>
      <Container>
        {article.title && article.content ? (
          <Article article={article} />
        ) : (
          <ArticleNotAvailable />
        )}
        <Sidebar />
      </Container>
    </MainTemplate>
  )
}

export const query = graphql`
  query articleTemp($slug: String) {
    pl: contentfulArticles(slug: { eq: $slug }) {
      title: titlePl
      content: contentPl {
        json
      }
    }
    fr: contentfulArticles(slug: { eq: $slug }) {
      title: titleFr
      content: contentFr {
        json
      }
    }
    en: contentfulArticles(slug: { eq: $slug }) {
      title: titleEn
      content: contentEn {
        json
      }
    }

    node: contentfulArticles(slug: { eq: $slug }) {
      articleImage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      date(formatString: "DD/MM/YYYY")
    }
    file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
export default injectIntl(Index)
