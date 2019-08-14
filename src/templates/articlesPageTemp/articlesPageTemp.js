import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import { injectIntl, Link } from "gatsby-plugin-intl"
import ArticlePreview from "../../components/ArticlePreview/ArticlePreview"
import truncate from "lodash/truncate"

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
  const localizedData = data[locale].nodes //Array for each locale
  const fallbackImage = data.fallbackImage.childImageSharp.fluid

  const articlesData = localizedData.map(data => {
    const image = data.articleImage ? data.articleImage.fluid : fallbackImage
    const text = data.content
      ? data.content.json.content[0].content[0].value
      : null
    const exerpt = truncate(text, { length: 300 })

    return {
      title: data.title,
      date: data.date,
      slug: data.slug,
      exerpt: exerpt,
      image: image,
    }
  })

  // Pagination

  const isFirstPage = pageContext.currentPage === 0
  const isLastPage = pageContext.currentPage === pageContext.pagesCount - 1

  return (
    <MainTemplate>
      <Container>
        <Wrapper>
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
// TODO:to many same queries, it posible to make less as in articleTemp query
export const query = graphql`
  query ArticleList($skip: Int, $articlesPerPage: Int) {
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
  }
`

export default injectIntl(Index)
