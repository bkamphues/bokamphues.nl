import React from "react";
import ProjectGrid from "../components/project-grid";
import ProjectCard from "../components/project-card";
import { graphql } from "gatsby";

export default function Index({ data }) {
	return (
		<body className="bg-gray-100 h-screen">
			<div className="px-10">
				<div className="flex flex-wrap -mx-5 overflow-hidden">
					{/* <ProjectGrid projects={data} /> */}
					<ProjectCard
						year={2021}
						title="Test Project"
						thumbnail="test.png"
						tags={["Development", "Visual Effects"]}
					>
						This website was created with Gatsby and React.
					</ProjectCard>
					<ProjectCard
						year={2021}
						title="Second Test Project"
						thumbnail="game_profile_picture.jpg"
						tags={["Development", "Testing", "VFX"]}
					>
						This project was created to inspire people.
					</ProjectCard>
				</div>
			</div>
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
