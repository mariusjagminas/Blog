import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar/Sidebar';
import { injectIntl } from 'gatsby-plugin-intl';
import ArticlePreview from '../../components/ArticlePreview/ArticlePreview';
import { MainContainer, MainWrapper } from '../../assets/styles/layout';

const Index = ({ data, pageContext: { slugsArray }, intl: { locale } }) => {
	function checkForMatch(item, slugsArray) {
		return slugsArray.find(e => e.node.slug === item.slug) ? true : false;
	}

	const locArticlesNodes = data[locale].nodes.filter(item => checkForMatch(item, slugsArray));

	return (
		<MainTemplate isRedirectToHomePage={true}>
			<MainContainer>
				<MainWrapper>
					{locArticlesNodes.map((node, i) => (
						<ArticlePreview
							key={i}
							date={node.date}
							title={node.title}
							image={node.articleImage ? node.articleImage.fluid : null}
							content={node.content ? node.content.json : null}
							slug={node.slug}
						/>
					))}
				</MainWrapper>
				<Sidebar />
			</MainContainer>
		</MainTemplate>
	);
};

export default injectIntl(Index);

export const query = graphql`
	query articlesGroupByDateTemp {
		#########
		#########
		pl: allContentfulArticles(filter: { titlePl: { ne: null } }, sort: { fields: date, order: DESC }) {
			nodes {
				title: titlePl
				date(formatString: "DD/MM/YYYY")
				slug
				content: contentPl {
					json
				}
				articleImage {
					fluid(maxWidth: 800) {
						...GatsbyContentfulFluid_withWebp_noBase64
					}
				}
			}
		}
		########
		########
		fr: allContentfulArticles(filter: { titleFr: { ne: null } }, sort: { fields: date, order: DESC }) {
			nodes {
				title: titleFr
				date(formatString: "DD/MM/YYYY")
				slug
				content: contentFr {
					json
				}
				articleImage {
					fluid(maxWidth: 800) {
						...GatsbyContentfulFluid_withWebp_noBase64
					}
				}
			}
		}
		##########
		##########
		en: allContentfulArticles(filter: { titleEn: { ne: null } }, sort: { fields: date, order: DESC }) {
			nodes {
				title: titleEn
				date(formatString: "DD/MM/YYYY")
				slug
				content: contentEn {
					json
				}
				articleImage {
					fluid(maxWidth: 800) {
						...GatsbyContentfulFluid_withWebp_noBase64
					}
				}
			}
		}
	}
`;
