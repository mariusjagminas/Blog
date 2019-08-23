import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
import H3Sidebar from "../H3Sidebar/H3Sidebar"
import styled from "styled-components"

const Archive = ({ intl: { locale }, intl }) => {
  // Create links to articlesGroupedByMonth pages from dates grouped by month
  const data = useStaticQuery(query)
  const groupedDates = _.groupBy(data[locale].edges, item => item.node.date)
  const datesArray = _.map(groupedDates, item => item[0].node.date)

  const Wrapper = styled.section`
    margin-top: 105px;
  `

  const StyledUl = styled.ul`
    padding: 0;
    margin-bottom: 50px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 600px;
    flex-wrap: wrap;
  `

  const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    padding: 5px 10px;
    border-bottom: 1px solid black;
    transition: color 0.3s, border-color 0.3s;
  `

  const StyledLi = styled.li`
    margin: 3px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }

    &:hover ${StyledLink} {
      color: ${({ theme }) => theme.secondary};
      border-color: ${({ theme }) => theme.secondary};
    }
  `

  return (
    <Wrapper>
      <H3Sidebar title={intl.formatMessage({ id: "archive.title" })} />
      <StyledUl>
        {datesArray.map((item, i) => (
          <StyledLi key={i}>
            <StyledLink to={`/archive/${item}`}>{item}</StyledLink>
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
