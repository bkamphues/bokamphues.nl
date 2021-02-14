import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProjectCard from "./project-card"
import path from "path"

export default class ProjectGrid extends React.Component {
  // react component to create a grid of all projects

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
              edges {
                node {
                  childMarkdownRemark {
                    frontmatter {
                      year
                      title
                      thumbnail
                      pr_link
                      gh_link
                    }
                    html
                  }
                }
              }
            }
          }
        `}
        render={data =>
          data.allFile.edges.map(project => (
            <ProjectCard
              year={project.node.childMarkdownRemark.frontmatter.year}
              title={project.node.childMarkdownRemark.frontmatter.title}
              thumbnail={path.basename(
                project.node.childMarkdownRemark.frontmatter.thumbnail
              )}
            >
              {project.node.childMarkdownRemark.html}
            </ProjectCard>
          ))
        }
      />
    )
  }
}
