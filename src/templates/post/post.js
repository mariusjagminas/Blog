import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar/Sidebar';
import Article from '../../components/Article/Article';
import { injectIntl } from 'gatsby-plugin-intl';
import ReturnToLink from '../../components/ReturnToLink/ReturnToLink';
import { MainContainer, MainWrapper } from '../../assets/styles/layout';
import NextPrevLinks from '../../components/NextPrevLinks/NextPrevLinks';

const Index = ({ data, intl, intl: { locale }, pageContext: { slug } }) => {
	// Get matching node from node list for every language
	const node = data[`${locale}_slugs`].edges.find(item => item.node.slug === slug);
	// Do some data validation and get next and prev articles paths
	const prevPagePath = node && node.previous ? `/${node.previous.slug}` : null;
	const nextPagePath = node && node.next ? `/${node.next.slug}` : null;

	// data extraction and validation
	const title = data[locale].title;
	const contentJson = data[locale].content ? data[locale].content.json : null;
	// const imgFluid = data.node.articleImage ? data.node.articleImage.fluid : null;
	const imgFixed = data.node.articleImage ? data.node.articleImage.fixed.src : null;

	return (
		<MainTemplate seo={{ title: title, contentJson: contentJson, imgFixed: imgFixed, slug: slug }}>
			<MainContainer>
				<MainWrapper>
					{data[locale].title && data[locale].content ? (
						<>
							<Article
								title={data[locale].title}
								content={data[locale].content.json}
								image={data.node.articleImage ? data.node.articleImage.fluid : null}
								date={data.node.date}
								slug={slug}
							/>
							<NextPrevLinks
								pathPrev={prevPagePath}
								textPrev={intl.formatMessage({ id: 'post.previous' })}
								pathNext={nextPagePath}
								textNext={intl.formatMessage({ id: 'post.next' })}
							/>
						</>
					) : (
						<ReturnToLink text={intl.formatMessage({ id: 'content_unavailable' })} />
					)}
				</MainWrapper>
				<Sidebar />
			</MainContainer>
		</MainTemplate>
	);
};

export const query = graphql`
	query articleTemp($slug: String) {
		pl: contentfulArticles(slug: { eq: $slug }) {
			title: titlePl
			content: contentPl {
				json
			}
		}
		fr: contentfulArticles(slug: { eq: $slug }) {
			title: titleFr
			content: contentFr {
				json
			}
		}
		en: contentfulArticles(slug: { eq: $slug }) {
			title: titleEn
			content: contentEn {
				json
			}
		}
		#######
		#######
		#######
		node: contentfulArticles(slug: { eq: $slug }) {
			articleImage {
				fluid(maxWidth: 800) {
					...GatsbyContentfulFluid_withWebp_noBase64
				}

				fixed(width: 600) {
					src
				}
			}
			date(formatString: "DD/MM/YYYY")
		}
		######
		######
		######
		pl_slugs: allContentfulArticles(filter: { titlePl: { ne: null } }, sort: { order: DESC, fields: date }) {
			edges {
				...prevCurrentNextSlug
			}
		}
		fr_slugs: allContentfulArticles(filter: { titleFr: { ne: null } }, sort: { order: DESC, fields: date }) {
			edges {
				...prevCurrentNextSlug
			}
		}
		en_slugs: allContentfulArticles(filter: { titleEn: { ne: null } }, sort: { order: DESC, fields: date }) {
			edges {
				...prevCurrentNextSlug
			}
		}
	}
`;

export const prevCurrentNextSlug = graphql`
	fragment prevCurrentNextSlug on ContentfulArticlesEdge {
		previous {
			slug
		}
		node {
			slug
		}
		next {
			slug
		}
	}
`;
export default injectIntl(Index);
