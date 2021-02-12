import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"

function renderImage(image) {
  return <Img fluid={image.node.childImageSharp.fluid} />
}

export default function ImageFluid(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
            edges {
              node {
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
                relativePath
              }
            }
          }
        }
      `}
      render={data => {
        const image = data.images.edges.find(
          image => image.node.relativePath === props.image
        )
        return renderImage(image)
      }}
    />
  )
}
