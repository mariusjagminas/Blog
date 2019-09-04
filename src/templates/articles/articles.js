import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar/Sidebar';
import { injectIntl } from 'gatsby-plugin-intl';
import ArticlePreview from '../../components/ArticlePreview/ArticlePreview';
import { MainContainer, MainWrapper } from '../../assets/styles/layout';
import NextPrevLinks from '../../components/NextPrevLinks/NextPrevLinks';

const Index = ({ data, pageContext, intl: { locale }, intl }) => {
	const locArticlesNodes = data[locale].nodes;

	const isFirstPage = pageContext.currentPage === 0;
	// Graphql query returns the count of articles, which could be published in the next page
	// if there is no article for a next page, then current page is the last one.
	const isLastPage = data[`${locale}NextPage`].nodes.length <= 0;
	// paths to next and previous page
	const prevPagePath = pageContext.currentPage === 1 ? '/' : `/${pageContext.currentPage - 1}`;
	const nextPagePath = `/${pageContext.currentPage + 1}`;

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
					<NextPrevLinks
						pathPrev={!isFirstPage && prevPagePath}
						textPrev={intl.formatMessage({ id: 'article.previous' })}
						pathNext={!isLastPage && nextPagePath}
						textNext={intl.formatMessage({ id: 'article.next' })}
					/>
				</MainWrapper>
				<Sidebar />
			</MainContainer>
		</MainTemplate>
	);
};

export const query = graphql`
	query ArticleList($skip: Int, $articlesPerPage: Int, $skipToNextPage: Int) {
		#########
		#########
		pl: allContentfulArticles(
			filter: { titlePl: { ne: null } }
			skip: $skip
			limit: $articlesPerPage
			sort: { fields: date, order: DESC }
		) {
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
		fr: allContentfulArticles(
			filter: { titleFr: { ne: null } }
			skip: $skip
			limit: $articlesPerPage
			sort: { fields: date, order: DESC }
		) {
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
		en: allContentfulArticles(
			filter: { titleEn: { ne: null } }
			skip: $skip
			limit: $articlesPerPage
			sort: { fields: date, order: DESC }
		) {
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
		#######
		#######
		######
		######
		plNextPage: allContentfulArticles(filter: { titlePl: { ne: null } }, skip: $skipToNextPage) {
			nodes {
				id
			}
		}
		frNextPage: allContentfulArticles(filter: { titleFr: { ne: null } }, skip: $skipToNextPage) {
			nodes {
				id
			}
		}
		enNextPage: allContentfulArticles(filter: { titleEn: { ne: null } }, skip: $skipToNextPage) {
			nodes {
				id
			}
		}
	}
`;

export default injectIntl(Index);

// FIXME: Photo which is coming from contenfull rich text does't renders???
