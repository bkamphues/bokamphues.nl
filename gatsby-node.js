// create the blog pages
exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;

	const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.tsx`);

	// query for all markdown pages
	const result = await graphql(`
		{
			allMarkdownRemark(
				sort: { order: DESC, fields: [frontmatter___date] }
				limit: 1000
				filter: { fileAbsolutePath: { regex: "/(articles)/.*.md$/" } }
			) {
				edges {
					node {
						frontmatter {
							slug
						}
						fileAbsolutePath
					}
				}
			}
		}
	`);

	// handle errors
	if (result.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query`);
		return;
	}

	// create pages from query
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: `/blog/${node.frontmatter.slug}`,
			component: blogPostTemplate,
			context: {
				slug: node.frontmatter.slug,
			},
		});
	});
};
