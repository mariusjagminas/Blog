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

const StyledH2 = styled.h2`
	font-size: 36px;
	text-align: center;
`;

const Index = ({ data, intl, intl: { locale }, pageContext: { slug } }) => {
	const locTitle = data[locale] ? data[locale].title : null;
	return (
		<MainTemplate title={locTitle}>
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
	}
`;
export default injectIntl(Index);
