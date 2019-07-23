import React from 'react';
import getLocalizedData from '../../assets/helpers/getLocalizedData';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import H3Sidebar from '../H3Sidebar/H3Sidebar'

const LatestArticles = ({ intl: { locale } }) => {
	
	const nodes = useStaticQuery(query);
	const articlesData = getLocalizedData(nodes, locale, 0, 10);
	return (
		<>
		<H3Sidebar title={"popular posts"}/>
		<ul>
			{articlesData.map((data, i) => (
				<li key={i}>
					<Link to={data.slug}>{data.title}</Link>
				</li>
			))}
		</ul>
		</>
	);
};


export default injectIntl(LatestArticles);

const query = graphql`
query latestArticles {
	allContentfulArticles(sort: { fields: date, order: DESC }) {
		edges {
			node {
				date(formatString: "DD/MM/YYYY")
				slug
				titlePl
				titleFr
				articleImage {
					fluid(maxWidth: 600) {
						...GatsbyContentfulFluid_withWebp_noBase64
					}
				}
			}
		}
	}

	file(relativePath: { eq: "hero_img.jpg" }) {
		childImageSharp {
			fluid(maxWidth: 600) {
				...GatsbyImageSharpFluid_withWebp_noBase64
			}
		}
	}
}
`