import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import Sidebar from "../../components/Sidebar/Sidebar"
import styled from "styled-components"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Img from "gatsby-image"

const Wrapper = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.bright};
`

const ImgWrapper = styled.div`
  width: 100px;
`

const Index = ({ data, pageContext, intl: { locale: loc } }) => {
  // Create array of localized data objects

  const indexFrom = pageContext.skip
  const indexUntil = pageContext.skip + pageContext.articlesPerPage

  const x = data.allContentfulArticles.edges
    .map(node => {
      return {
        title: loc === "pl" ? node.node.titlePl : node.node.titleFr,
        slug: node.node.slug,
        date: node.node.date,
        image: node.node.articleImage || data.file.childImageSharp,
      }
    })
    .filter(obj => obj.title) // Discard nodes with empty titles
    .slice(indexFrom, indexUntil)

  //Pagination

  const isFirstPage = pageContext.currentPage === 1
  const isLastPage = pageContext.currentPage === pageContext.pagesCount

  return (
    <MainTemplate>
      <Wrapper>
        {x.map((item, i) => (
          <div key={i}>
            <Link key={i} to={`/${item.slug}`}>
              {item.title}
              <ImgWrapper>
                <Img fluid={item.image.fluid} />
              </ImgWrapper>
            </Link>
            <p>{item.date}</p>
          </div>
        ))}
        {<p>{`Current page is: ${pageContext.currentPage}`}</p>}
        {!isFirstPage && (
          <Link to={`/articles/${pageContext.currentPage - 1}`}>
            Previous Page
          </Link>
        )}
        <br />
        {!isLastPage && (
          <Link to={`/articles/${pageContext.currentPage + 1}`}>Next Page</Link>
        )}
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
          date(formatString: "DD/MM/YYYY")
          slug
          titlePl
          titleFr
          articleImage {
            fluid(maxHeight: 200) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
    file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 40) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default injectIntl(Index)
