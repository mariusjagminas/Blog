import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import H3Sidebar from "../H3Sidebar/H3Sidebar"
import styled from "styled-components"
import { LinkFramed } from "../../assets/styles/Links"

const Archive = ({ intl: { locale }, intl }) => {
  // Create links to articlesGroupedByMonth pages from dates grouped by month
  const data = useStaticQuery(query)
  const groupedDates = _.groupBy(data[locale].edges, item => item.node.date)
  const datesArray = _.map(groupedDates, item => item[0].node.date)

  const Wrapper = styled.section`
    margin-top: 105px;
  `

  const StyledUl = styled.ul`
    padding: 0 10px;
    margin-bottom: 50px;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    max-height: 600px;
    flex-wrap: wrap;
  `

  const StyledLi = styled.li`
    margin: 5px;
  `

  return (
    <Wrapper>
      <H3Sidebar title={intl.formatMessage({ id: "archive.title" })} />
      <StyledUl>
        {datesArray.map((item, i) => (
          <StyledLi key={i}>
            <LinkFramed to={`/archive/${item}`}>{item}</LinkFramed>
          </StyledLi>
        ))}
      </StyledUl>
    </Wrapper>
  )
}

export default injectIntl(Archive)

const query = graphql`
  query archiveComponent {
    pl: allContentfulArticles(
      filter: { titlePl: { ne: null } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          date(formatString: "MM YYYY")
        }
      }
    }
    fr: allContentfulArticles(
      filter: { titleFr: { ne: null } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          date(formatString: "MM YYYY")
        }
      }
    }

    en: allContentfulArticles(
      filter: { titleEn: { ne: null } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          date(formatString: "MM YYYY")
        }
      }
    }
  }
`
