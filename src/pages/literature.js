import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import { Link } from "gatsby"

export default ({ data }) => (
  <MainTemplate>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Link key={node.id} to={node.fields.slug}>
          <li>{node.frontmatter.title}</li>
        </Link>
      ))}
    </ul>
  </MainTemplate>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
