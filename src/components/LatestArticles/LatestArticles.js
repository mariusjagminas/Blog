import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import H3Sidebar from "../H3Sidebar/H3Sidebar"
import styled from "styled-components"
import List from "../List/List"

const Container = styled.section`
  margin-top: 120px;
`

const LatestArticles = ({ intl: { locale }, intl }) => {
  const data = useStaticQuery(query)

  return (
    <Container>
      <H3Sidebar title={intl.formatMessage({ id: "latest.title" })} />
      <List nodes={data[locale].nodes} />
    </Container>
  )
}

export default injectIntl(LatestArticles)

const query = graphql`
  query LatestArticles($limit: Int = 4) {
    #######
    #######
    pl: allContentfulArticles(
      filter: { titlePl: { ne: null } }
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title: titlePl
        date(formatString: "DD/MM/YYYY")
        slug
        articleImage {
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
    #######
    #######
    fr: allContentfulArticles(
      filter: { titleFr: { ne: null } }
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title: titleFr
        date(formatString: "DD/MM/YYYY")
        slug
        articleImage {
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
    #######
    #######
    en: allContentfulArticles(
      filter: { titleEn: { ne: null } }
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title: titleEn
        date(formatString: "DD/MM/YYYY")
        slug
        articleImage {
          fluid(maxWidth: 300) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
    #######
    #######
  }
`
