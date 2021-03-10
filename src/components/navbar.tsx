import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { validURL } from "../util/siteLib";

function NavigationLinks() {
	// retrieve link data from site settings
	const data = useStaticQuery(graphql`
		query {
			allSiteSettingsYaml {
				edges {
					node {
						id
						nav_links {
							link_name
							link_url
						}
					}
				}
			}
		}
	`);

	// filter the data for navigation links
	let links = data.allSiteSettingsYaml.edges.filter(
		setting => setting.node.nav_links != null
	)[0].node.nav_links;

	// validate each URL and return html
	let navigationLinks = [];
	links.forEach(link => {
		if (validURL(link.link_url)) {
			navigationLinks.push(
				<a href={link.link_url} target="_blank" rel="noopener noreferrer">
					{link.link_name}
				</a>
			);
		} else {
			navigationLinks.push(
				<Link
					className="px-3 py-2 text-md rounded-md text-white hover:bg-gray-700 font-semibold"
					to={link.link_url}
				>
					{link.link_name}
				</Link>
			);
		}
	});

	// return link item
	return <ul>{navigationLinks}</ul>;
}

export default class Navbar extends React.Component {
	// constructor hook
	constructor(props) {
		super(props);
	}

	// render hook
	render() {
		return (
			<nav className="bg-gray-800 p-4 shadow-md">
				<NavigationLinks />
			</nav>
		);
	}
}
