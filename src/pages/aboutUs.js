import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import Hero from "../components/Hero/Hero"
import { graphql } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"
import styled from "styled-components"
import ArticleSocialIcons from "../components/ArticleSocialIcons/ArticleSocialIcons"

const TextWrapper = styled.div`
  max-width: 780px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.m};
  }
`

const Index = ({ data, intl }) => {
  return (
    <MainTemplate>
      <Hero data={data} />
      <TextWrapper>
        <h2>ABOUT_US_PAGE</h2>
        <ArticleSocialIcons />
      </TextWrapper>
    </MainTemplate>
  )
}

export const query = graphql`
  query About {
    file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
export default injectIntl(Index)
