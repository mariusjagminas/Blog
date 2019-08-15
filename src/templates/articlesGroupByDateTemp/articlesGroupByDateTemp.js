import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview"
import getLocalizedData from "../../assets/helpers/getLocalizedData"

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

const Wrapper = styled.div`
  width: 100%;
  max-width: 880px;
  position: relative;
  padding: 0 10px 70px 10px;
`

const Index = ({ data, pageContext: { slugsArray }, intl: { locale } }) => {
  const articleData = getLocalizedData(data, locale).filter(item =>
    checkForMatch(item, slugsArray)
  )

  function checkForMatch(item, slugsArray) {
    return slugsArray.find(e => e.node.slug === item.slug) ? true : false
  }

  return (
    <MainTemplate>
      <Container>
        <Wrapper>
          {articleData.map((data, i) => (
            <ArticlePreview data={data} key={i} />
          ))}
        </Wrapper>
        <Sidebar />
      </Container>
    </MainTemplate>
  )
}

export default injectIntl(Index)

export const query = graphql`
  query articlesGroupByDateTemp {
    #########
    #########
    pl: allContentfulArticles(
      filter: { titlePl: { ne: null } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title: titlePl
        date(formatString: "DD/MM/YYYY")
        slug
        content: contentPl {
          json
        }
        articleImage {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
    ########
    ########
    fr: allContentfulArticles(
      filter: { titleFr: { ne: null } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title: titleFr
        date(formatString: "DD/MM/YYYY")
        slug
        content: contentFr {
          json
        }
        articleImage {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
    ##########
    ##########
    en: allContentfulArticles(
      filter: { titleEn: { ne: null } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title: titleEn
        date(formatString: "DD/MM/YYYY")
        slug
        content: contentEn {
          json
        }
        articleImage {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
    #######
    #######
    fallbackImage: file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
