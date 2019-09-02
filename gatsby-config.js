require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		baseUrl: 'https://gallant-kare-5fe476.netlify.com'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				// language JSON resource path
				path: `${__dirname}/public/intl`,
				// #####
				// To avoid page duplication ( egz. www.url.com/ www.url.com/pl)
				// language pl is not set in supported language list below.
				// Default path '/' is set to Polish content pages now,
				// for that reason some changes are made in these components:
				// 1.Languages.js var locale is set to '/' instead of 'pl'
				// 2.ShareLinks.js var postUrl is assembled that way, if intl.locale var is 'pl' then localization
				// prefix is empty string ''
				//######
				// supported language
				languages: [`fr`, 'en'],
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
				downloadLocal: false
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
