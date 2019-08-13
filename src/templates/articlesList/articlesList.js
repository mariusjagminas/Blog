import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import { injectIntl, Link } from "gatsby-plugin-intl"
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview"

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
const Index = ({ data, pageContext, intl: { locale } }) => {
  // data depends which locale is active
  const articlesData = data[locale].nodes
  const falbackImage = data.file.childImageSharp.fluid
  //Pagination

  const isFirstPage = pageContext.currentPage === 0
  const isLastPage = pageContext.currentPage === pageContext.pagesCount - 1

  return (
    <MainTemplate>
      <Container>
        <Wrapper>
          {articlesData.map((data, i) => (
            <ArticlePreview data={data} falbackImage={falbackImage} key={i} />
          ))}
          {!isFirstPage && (
            <LinkToPrevious
              to={
                pageContext.currentPage === 1
                  ? "/"
                  : `/${pageContext.currentPage - 1}`
              }
            >
              ← Newer articles
            </LinkToPrevious>
          )}
          {!isLastPage && (
            <LinkToNext to={`/${pageContext.currentPage + 1}`}>
              Older articles →
            </LinkToNext>
          )}
        </Wrapper>

        <Sidebar />
      </Container>
    </MainTemplate>
  )
}

export const query = graphql`
  query ArticleList($skip: Int, $articlesPerPage: Int) {
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
