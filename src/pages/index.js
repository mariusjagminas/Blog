import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import Hero from "../components/Hero/Hero"
import { graphql } from "gatsby"
// import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

const Index = ({data}) => {

  return (
    <MainTemplate>
      <Hero data={data} />
      {/* <FormattedMessage id="banner" /> */}
    </MainTemplate>
  )
}





export const query = graphql`
  query About($locale: String ){
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
export default Index
