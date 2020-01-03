import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import H3Sidebar from "../H3Sidebar/H3Sidebar"
import styled from "styled-components"
import List from "../List/List"

const Container = styled.section`
  margin-top: 100px;
`

const HistoryOfTheaterList = ({ intl: { locale } }) => {
  const data = useStaticQuery(query)
  return data[locale] ? (
    <Container>
      <H3Sidebar title={"Histoire du théâtre"} />
      <List nodes={data[locale].nodes} />
    </Container>
  ) : null
}

export default injectIntl(HistoryOfTheaterList)

const query = graphql`
  query historyOfTheaterList {
    fr: allContentfulHistoryOfTheater(sort: { fields: date, order: ASC }) {
      nodes {
        title: titleFr
        slug
        articleImage {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
      }
    }
  }
`
