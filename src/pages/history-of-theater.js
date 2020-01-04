import React from "react"
import MainTemplate from "../components/MainTemplate/MainTemplate"
import { MainContainer, MainWrapper } from "../assets/styles/layout"
import Sidebar from "../components/Sidebar/Sidebar"
import { graphql } from "gatsby"
import ArticlePreviewSmall from "../components/ArticlePreviewSmall/ArticlePreviewSmall"
import { injectIntl } from "gatsby-plugin-intl"
import ReturnToLink from "../components/ReturnToLink/ReturnToLink"
import styled from "styled-components"

const StyledMainWrapper = styled(MainWrapper)`
  padding: 15px 0;
  min-height: calc(100vh - 225px);
`

export const Info = styled.p`
  margin: 0 auto -23px auto;
  font-size: 27px;
  max-width: 250px;
  text-align: center;
  box-shadow: 0px 5px 2px -5px rgba(0, 0, 0, 0.16);
  display: none;

  ${({ theme }) => theme.mq.tablet} {
    display: block;
    margin: 29px auto -3px auto;
    font-size: 38px;
    max-width: 360px;
  }
`

const Index = ({ data, intl, intl: { locale } }) => {
  const locArticles = data[locale] ? data[locale].nodes : null
  const isNoArticlesToShow = locArticles ? false : true
  return (
    <MainTemplate
      seo={{ title: "Histoire du théâtre", isNoindex: isNoArticlesToShow }}
    >
      <MainContainer>
        <StyledMainWrapper>
          <Info>Histoire du théâtre</Info>
          {locArticles ? (
            locArticles.map((node, i) => {
              return (
                <ArticlePreviewSmall
                  key={i}
                  title={node.title}
                  image={node.articleImage.fluid}
                  content={node.content.json}
                  slug={node.slug}
                  imgName={node.articleImage.title}
                />
              )
            })
          ) : (
            <ReturnToLink
              text={intl.formatMessage({ id: "content_unavailable" })}
            />
          )}
        </StyledMainWrapper>
        <Sidebar />
      </MainContainer>
    </MainTemplate>
  )
}

export default injectIntl(Index)

export const query = graphql`
  query historyOfTheater {
    fr: allContentfulHistoryOfTheater(sort: { fields: date, order: ASC }) {
      nodes {
        title: titleFr
        slug
        articleImage {
          title
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp_noBase64
          }
        }
        content: contentFr {
          json
        }
      }
    }
  }
`
