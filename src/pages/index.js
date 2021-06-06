import { graphql } from "gatsby";
import React from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { GatsbyImage } from "gatsby-plugin-image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export default function Index({ data }) {
	const dataNode = data.allContentfulArticle.edges[0].node;
	const document = JSON.parse(dataNode.articleBody.raw);

	const options = {
		renderNode: {
			[BLOCKS.EMBEDDED_ASSET]: node => {
				const imageID = node.data.target.sys.id;
				const imageData = dataNode.articleBody.references.find(
					({ contentful_id: id }) => id === imageID
				).gatsbyImageData;

				return <GatsbyImage image={imageData} />;
			},
		},
	};

	return <div>{documentToReactComponents(document, options)}</div>;
}

export const query = graphql`
	{
		allContentfulArticle {
			edges {
				node {
					articleBody {
						raw
						references {
							... on ContentfulArticle {
								contentful_id
							}
							... on ContentfulAsset {
								contentful_id
								title
								description
								gatsbyImageData(placeholder: BLURRED)
							}
						}
					}
				}
			}
		}
	}
`;
