import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import { injectIntl } from "gatsby-plugin-intl"
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview"
import getLocalizedData from "../../assets/helpers/getLocalizedData"
import { MainContainer, MainWrapper } from "../../assets/styles/layout"

const Index = ({ data, pageContext: { slugsArray }, intl: { locale } }) => {
  const articleData = getLocalizedData(data, locale).filter(item =>
    checkForMatch(item, slugsArray)
  )

  function checkForMatch(item, slugsArray) {
    return slugsArray.find(e => e.node.slug === item.slug) ? true : false
  }

  return (
    <MainTemplate>
      <MainContainer>
        <MainWrapper>
          {articleData.map((data, i) => (
            <ArticlePreview data={data} key={i} />
          ))}
        </MainWrapper>
        <Sidebar />
      </MainContainer>
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
