import React from "react";
import { graphql } from "gatsby";
import Navbar from "../components/navbar";

export default function Index({ data }) {
	return (
		<body className="bg-gray-100 h-screen">
			<Navbar></Navbar>
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
