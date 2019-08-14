import React from "react"
import getLocalizedData from "../../assets/helpers/getLocalizedData"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"
import H3Sidebar from "../H3Sidebar/H3Sidebar"
import Img from "gatsby-image"
import styled from "styled-components"
import Date from "../Date/Date"
import truncate from "lodash/truncate"

const Container = styled.div`
  margin-top: 120px;
`

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const StyledLi = styled.li`
  margin: 30px 0;
  padding: 0;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
`

const StyledImg = styled(Img)`
	width: 60px;
	height: 60px;
	border-radius: 60px;
	// background: ${({ theme }) => theme.secondary};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 20px;
`

const StyledH4 = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.primary};
  line-height: 1.1;
  width: 200px;
`

const LatestArticles = ({ intl: { locale }, intl }) => {
  const nodes = useStaticQuery(query)
  const articlesData = getLocalizedData(nodes, locale, 0, 5)

  return (
    <Container>
      <H3Sidebar title={intl.formatMessage({ id: "latest.title" })} />
      <StyledUl>
        {articlesData.map((data, i) => (
          <StyledLi key={i}>
            <StyledLink to={`/${data.slug}`}>
              <StyledImg
                imgStyle={{ objectFit: "cover" }}
                fluid={data.image.fluid}
              />
              <Wrapper>
                <Date small date={data.date} />
                <StyledH4>{truncate(data.title, { length: 55 })}</StyledH4>
              </Wrapper>
            </StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </Container>
  )
}

export default injectIntl(LatestArticles)

const query = graphql`
  query latestArticles {
    allContentfulArticles(sort: { fields: date, order: DESC }) {
      edges {
        node {
          date(formatString: "DD/MM/YYYY")
          slug
          titlePl
          titleFr
          articleImage {
            fluid(maxWidth: 100) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }

    file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
