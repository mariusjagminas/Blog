import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import { injectIntl, Link } from "gatsby-plugin-intl"
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview"
import getLocalizedData from "../../assets/helpers/getLocalizedData"
import { MainContainer, MainWrapper } from "../../assets/styles/layout"

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 0;
  text-decoration: none;
  padding: 20px;
  color: ${({ theme }) => theme.primary};
  transition: color 0.5s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
`

const LinkToPrevious = styled(StyledLink)`
  left: 0;
`

const LinkToNext = styled(StyledLink)`
  right: 0;
`
const Index = ({ data, pageContext, intl: { locale }, intl }) => {
  const articlesData = getLocalizedData(data, locale)

  const isFirstPage = pageContext.currentPage === 0

  // Graphql queries for next page info,  how many articles(ID's) could be in it.
  // if  there is no articles in next page, then this page is last

  const nextPageArticlesCount = {
    pl: data.plNextPage.nodes.length,
    fr: data.frNextPage.nodes.length,
    en: data.enNextPage.nodes.length,
  }
  const isLastPage = nextPageArticlesCount[locale] <= 0

  return (
    <MainTemplate>
      <MainContainer>
        <MainWrapper>
          {articlesData.map((data, i) => (
            <ArticlePreview data={data} key={i} />
          ))}
          {!isFirstPage && (
            <LinkToPrevious
              to={
                pageContext.currentPage === 1
                  ? "/"
                  : `/${pageContext.currentPage - 1}`
              }
            >
              {`←${intl.formatMessage({ id: "article.previous" })}`}
            </LinkToPrevious>
          )}
          {!isLastPage && (
            <LinkToNext to={`/${pageContext.currentPage + 1}`}>
              {`${intl.formatMessage({ id: "article.next" })}→`}
            </LinkToNext>
          )}
        </MainWrapper>

        <Sidebar />
      </MainContainer>
    </MainTemplate>
  )
}

export const query = graphql`
  query ArticleList($skip: Int, $articlesPerPage: Int, $skipToNextPage: Int) {
    #########
    #########
    pl: allContentfulArticles(
      filter: { titlePl: { ne: null } }
      skip: $skip
      limit: $articlesPerPage
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
      skip: $skip
      limit: $articlesPerPage
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
      skip: $skip
      limit: $articlesPerPage
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
    #######
    #######
    #
    #
    ######
    ######
    plNextPage: allContentfulArticles(
      filter: { titlePl: { ne: null } }
      skip: $skipToNextPage
    ) {
      nodes {
        id
      }
    }
    frNextPage: allContentfulArticles(
      filter: { titleFr: { ne: null } }
      skip: $skipToNextPage
    ) {
      nodes {
        id
      }
    }
    enNextPage: allContentfulArticles(
      filter: { titleEn: { ne: null } }
      skip: $skipToNextPage
    ) {
      nodes {
        id
      }
    }
  }
`

export default injectIntl(Index)
