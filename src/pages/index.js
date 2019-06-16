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
    file(name: { regex: "/hero_img/" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
