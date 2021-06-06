const path = require(`path`);

// automatically create blog pages
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		{
			allContentfulArticle {
				edges {
					node {
						articleSlug
					}
				}
			}
		}
	`);

	result.data.allContentfulArticle.edges.forEach(({ node }) => {
		createPage({
			path: node.articleSlug,
			component: path.resolve(`./src/templates/blog-post.tsx`),
			context: {
				slug: node.articleSlug,
			},
		});
	});
};
