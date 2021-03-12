import React from "react";
import { graphql, useStaticQuery } from "gatsby";

// component that returns the site logo in a navigation block
export default function NavigationLogos() {
	// query for the 'logo.svg' file in the /static folder
	const data = useStaticQuery(graphql`
		{
			allFile(filter: { extension: { eq: "svg" }, name: { eq: "logo" } }) {
				nodes {
					publicURL
				}
			}
		}
	`);

	// bind publicURL data to logo variable
	const logo = data.allFile.nodes[0].publicURL;

	// return a <div> with an <img> tag for the logo
	return (
		<div className="flex-shrink-0 flex items-center">
			<img className="hidden lg:block h-8 w-auto" src={logo} />
		</div>
	);
}
