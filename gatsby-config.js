require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		title: `Literatura`,
		description: `Literatura najnowsza`,
		author: `Pawel Hladki`
	},
	plugins: [
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				// language JSON resource path
				path: `${__dirname}/public/intl`,
				// supported language
				languages: [`fr`, `pl`],
				// language file path
				defaultLanguage: 'pl',
				// option to redirect to `/pl` when connecting `/`
				redirect: false
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src`
			}
		},

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-lodash`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				downloadLocal: true
			}
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			}
		}
	]
};
