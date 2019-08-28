import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar/Sidebar';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import ArticleNotAvailable from '../../components/ArticleNotAvailable/ArticleNotAvailable';
import RichTextContentful from '../../components/RichTextContenful/RichTextContenful';
import { Info } from '../../pages/history-of-theater';

const Container = styled.div`
	max-width: 1360px;
	margin: 0 auto;
	display: flex;
	justify-content: flex-start;
	background: ${({ theme }) => theme.bright};
	${({ theme }) => theme.mq.laptop} {
		padding-left: 80px;
	}
`;

const Wrapper = styled.article`
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
	max-width: 880px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ContentWrapper = styled.div`
	width: 100%;
`;

const StyledH2 = styled.h2`
	font-size: 36px;
	text-align: center;
`;

const Index = ({ data, intl: { locale } }) => {
	return (
		<MainTemplate>
			<Container>
				{data[locale] ? (
					<Wrapper>
						<Info>Histoire du théâtre</Info>
						<StyledH2>{data[locale].title}</StyledH2>
						<ContentWrapper>
							<RichTextContentful richText={data[locale].content.json} />
						</ContentWrapper>
					</Wrapper>
				) : (
					<ArticleNotAvailable />
				)}
				<Sidebar />
			</Container>
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
