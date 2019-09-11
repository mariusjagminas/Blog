import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar/Sidebar';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import RichTextContentful from '../../components/RichTextContenful/RichTextContenful';
import { Info } from '../../pages/history-of-theater';
import ShareLinks from '../../components/ShareLinks/ShareLinks';
import ReturnToLink from '../../components/ReturnToLink/ReturnToLink';
import { MainContainer, MainWrapper, ContentWrapper, RichTextWrapper } from '../../assets/styles/layout';
import NextPrevLinks from '../../components/NextPrevLinks/NextPrevLinks';

const StyledH2 = styled.h2`
	font-size: 36px;
	text-align: center;
`;

const Index = ({ data, intl, intl: { locale }, pageContext: { slug } }) => {
	const locTitle = data[locale] ? data[locale].title : null;
	const node = data[locale] ? data[`${locale}_slugs`].edges.find(item => item.node.slug === slug) : null;
	// Do some data validation and get next and prev articles paths
	const prevPagePath = node && node.previous ? `/${node.previous.slug}` : null;
	const nextPagePath = node && node.next ? `/${node.next.slug}` : null;

	return (
		<MainTemplate seo={{ title: locTitle, contentJson: locTitle? data[locale].content.json: null }}>
			<MainContainer>
				<MainWrapper>
					{locTitle ? (
						<ContentWrapper>
							<Info>Histoire du théâtre</Info>
							<StyledH2>{locTitle}</StyledH2>
							<RichTextWrapper>
								<RichTextContentful richText={data[locale].content.json} />
							</RichTextWrapper>
							<ShareLinks slug={slug} title={data[locale].title} />
							<NextPrevLinks
								pathPrev={prevPagePath}
								textPrev={intl.formatMessage({ id: 'history_of_theater.previous' })}
								pathNext={nextPagePath}
								textNext={intl.formatMessage({ id: 'history_of_theater.next' })}
							/>
						</ContentWrapper>
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
	query postHistoryOfTheater($slug: String) {
		fr: contentfulHistoryOfTheater(slug: { eq: $slug }) {
			title: titleFr
			content: contentFr {
				json
			}
		}
		#####
		#####
		fr_slugs: allContentfulHistoryOfTheater(filter: { titleFr: { ne: null } }, sort: { order: ASC, fields: date }) {
			edges {
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
		}
	}
`;
export default injectIntl(Index);
