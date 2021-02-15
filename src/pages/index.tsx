import { data } from "autoprefixer";
import React from "react";
import ProjectGrid from "../components/project-grid";
import { graphql } from "gatsby";

export default function Index({ data }) {
  return (
    <body className="bg-indigo-300">
      <ProjectGrid projects={data} />
    </body>
  );
}

export const query = graphql`
  {
    images: allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              gh_link
              pr_link
              thumbnail
              title
              year
            }
          }
        }
      }
    }
  }
`;
