import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import { MainContainer, MainWrapper } from '../assets/styles/layout';
import Sidebar from '../components/Sidebar/Sidebar';
import { graphql } from 'gatsby';
import ArticlePreviewSmall from '../components/ArticlePreviewSmall/ArticlePreviewSmall';
import { injectIntl } from 'gatsby-plugin-intl';
import ArticleNotAvailable from '../components/ArticleNotAvailable/ArticleNotAvailable';

const Index = ({ data, intl: { locale } }) => {
	const locArticles = data[locale] ? data[locale].nodes : null;
	return (
		<MainTemplate>
			<MainContainer>
				<MainWrapper>
					{locArticles ? (
						locArticles.map((node, i) => {
							return (
								<ArticlePreviewSmall
									key={i}
									title={node.title}
									image={node.articleImage.fluid}
									content={node.content.json}
								/>
							);
						})
					) : (
						<ArticleNotAvailable />
					)}
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
	}
`;
