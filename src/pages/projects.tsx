import React from "react"
import { graphql } from "gatsby"

const Projects = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            year
            thumbnail
            gh_link
            pr_link
          }
          html
        }
      }
    }
  }
`

export default Projects
