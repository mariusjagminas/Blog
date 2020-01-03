import React from "react"
import GatsbyImage from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Img = ({ fluid, ...props }) => {
  const {
    fallbackImage: {
      childImageSharp: { fluid: imageData },
    },
  } = useStaticQuery(query)

  return <GatsbyImage {...props} fluid={fluid || imageData} />
}

export const query = graphql`
  query Img {
    fallbackImage: file(relativePath: { eq: "hero_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`

export default Img
