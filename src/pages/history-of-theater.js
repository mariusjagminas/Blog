import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import { MainContainer, MainWrapper } from '../assets/styles/layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { graphql } from 'gatsby';
import ArticlePreviewSmall from '../components/ArticlePreviewSmall/ArticlePreviewSmall';
import getLocalizedData from '../assets/helpers/getLocalizedData';
import { injectIntl } from 'gatsby-plugin-intl';

const Index = ({ data, intl: { locale } }) => {
	const articles = getLocalizedData(data, locale);

	return (
		<MainTemplate>
			<MainContainer>
				<MainWrapper>
					{articles.map((data, i) => (
						<ArticlePreviewSmall data={data} key={i} />
					))}
				</MainWrapper>
				<Sidebar />
			</MainContainer>
		</MainTemplate>
	);
};

export default injectIntl(Index);

export const query = graphql`
	query historyOfTheater {
		fr: allContentfulHistoryOfTheater(sort: { fields: date, order: ASC }) {
			nodes {
				title: titleFr
				slug
				articleImage {
					fluid(maxWidth: 600) {
						...GatsbyContentfulFluid_withWebp_noBase64
					}
				}
				content: contentFr {
					json
				}
			}
		}
		fallbackImage: file(relativePath: { eq: "hero_img.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
	}
`;
