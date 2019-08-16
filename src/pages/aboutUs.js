import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import Hero from "../components/Hero/Hero"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import ArticleSocialIcons from "../components/ArticleSocialIcons/ArticleSocialIcons"
import RichTextContenful from "../components/RichTextContenful/RichTextContenful"

const TextWrapper = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`

const Index = ({ data, intl: { locale } }) => {
  return (
    <MainTemplate>
      <Hero data={data} />
      <TextWrapper>
        <RichTextContenful richText={data.page[locale].json} />
        <ArticleSocialIcons />
      </TextWrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query aboutUs {
    file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
    page: contentfulPages(pageName: { eq: "about-us" }) {
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
export default injectIntl(Index)
