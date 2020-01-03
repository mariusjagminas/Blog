import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

// Gatsby adds 'c' to entity id if it starts with a number.
function fixId(id) {
  if (id.length === 23 && id.startsWith("c")) {
    return id.slice(1)
  }
}

const ContentfulImage = ({ contentfulId, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAsset {
        edges {
          node {
            contentful_id
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  `)

  const image = data.allContentfulAsset.edges.find(
    edge => edge.node.contentful_id === fixId(contentfulId)
  )

  return image ? <Image {...props} fluid={image.node.fluid} /> : null
}
export default ContentfulImage
