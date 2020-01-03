import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import RichTextContenful from "../components/RichTextContenful/RichTextContenful"
import HeaderAboutMe from "../components/HeaderAboutMe/HeaderAboutMe"

const Wrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px 25px 20px;
  text-align: left;
  background: ${({ theme }) => theme.bright};
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
  p {
    margin: 0;
  }
`

const Index = ({ data, intl, intl: { locale } }) => {
  return (
    <MainTemplate
      seo={{
        title: intl.formatMessage({ id: "menu.about_me" }),
        slug: "about-me",
        hasPlContent: true,
        hasFrContent: true,
        hasEnContent: true,
      }}
    >
      <Wrapper>
        <HeaderAboutMe />
        <RichTextContenful richText={data.page[locale].json} />
      </Wrapper>
    </MainTemplate>
  )
}

export default injectIntl(Index)

export const query = graphql`
  query aboutMe {
    page: contentfulPages(pageName: { eq: "about-me" }) {
      pl: childContentfulPagesPagePlRichTextNode {
        json
      }
      fr: childContentfulPagesPageFrRichTextNode {
        json
      }
      en: childContentfulPagesPageEnRichTextNode {
        json
      }
    }
  }
`
