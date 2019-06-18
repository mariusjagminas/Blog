import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import Hero from "../components/Hero/Hero"
import { graphql } from "gatsby"

export default ({ data }) => (
  <MainTemplate>
    <Hero data={data} />
  </MainTemplate>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
