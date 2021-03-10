import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";
import ProjectCard from "../components/project-card"

export default function Index({ data }) {
	return (
		<body className="bg-gray-100 h-screen">
			<Navbar></Navbar>
			<ProjectCard title="test" year={2021} thumbnail="test.png" tags={["Development", "Test"]}>This is a test project.</ProjectCard>
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
