require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
	siteMetadata: {
		siteUrl: 'https://gallant-kare-5fe476.netlify.com',
		author: 'Pawel Hladki',
		defaultImage:
			'//images.ctfassets.net/mr4anmal14yv/14R5dOrZuMc1icND8HtGnr/d2a3ba42e6dce797b5061255b0d4dca7/asabolt_illustartion_m-gretkowska_trans.png?w=600&q=50'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Literatura najnowsza`,
				short_name: `Literatura najnowsza`,
				description: `Znajdziecie tu artykuły promujące książki wydane we Francji i w Polsce w ciągu ostatnich dwudziestu lat`,
				lang: `pl`,
				display: `standalone`,
				icon: `src/assets/images/favicon.png`,
				start_url: `/`,
				background_color: `#F0F8FA`,
				theme_color: `#f5f5f5`,
				localize: [
					{
						start_url: `/fr/`,
						lang: `fr`,
						name: `Littérature extrême-contemporaine`,
						short_name: `Littérature extrême-contemporaine`,
						description: `Vous trouverez les articles promouvant la récente production littéraire en France et en Pologne sous le courant.`
					},
					{
						start_url: `/en/`,
						lang: `en`,
						name: `Contemporary literature`,
						short_name: `Contemporary literature`,
						description: `You will find here articles promoting books published in France and Poland in the last twenty years`
					}
				]
			}
		},
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
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				policy: [{ userAgent: '*', disallow: '/' }],
				sitemap: null,
				host: null
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-lodash`,
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-yaml`,
		`gatsby-plugin-netlify`,
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
