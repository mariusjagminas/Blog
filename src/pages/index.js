import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import Hero from "../components/Hero/Hero"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import Markdown from "react-remarkable"
import ArticleSocialIcons from "../components/ArticleSocialIcons/ArticleSocialIcons"

const TextWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
`

const Index = ({ data, intl }) => {
  return (
    <MainTemplate>
      <Hero data={data} />
      <TextWrapper>
        <Markdown>{intl.formatMessage({ id: "about_page.content" })}</Markdown>
        <ArticleSocialIcons />
      </TextWrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query About($locale: String) {
    file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { locale: { eq: $locale }, slug: { eq: "about" } }
      }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`
export default injectIntl(Index)
