import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

function NavigationLinks () {
    const links = useStaticQuery(graphql`query NavigationQuery {
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
      `)
    return links.allSiteSettingsYaml.edges.node.nav_links
}

export default class Navbar extends React.Component {
    // constructor hook
    constructor(props) {
        super(props)
    }

    // render hook
    render() {
        return (
        <nav className = "bg-gray-800">
            
        </nav >
        )
    }
}