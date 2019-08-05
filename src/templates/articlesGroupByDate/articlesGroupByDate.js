import React from 'react';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { graphql } from 'gatsby';
import Sidebar from '../../components/Sidebar/Sidebar';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import ArticleShort from '../../components/ArticleShort/ArticleShort';
import getLocalizedData from '../../assets/helpers/getLocalizedData';

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

const Wrapper = styled.div`
	width: 100%;
	max-width: 880px;
	position: relative;
	padding: 0 10px 70px 10px;
`;

const Index = ({ data, pageContext: { slugsArray }, intl: { locale } }) => {
	const array = getLocalizedData(data, locale);
	const newArray = array.filter(item => checkForMatch(item, slugsArray));

	function checkForMatch(item, slugsArray) {
		return slugsArray.find(e => e.node.slug === item.slug) ? true : false;
	}

	return (
		<MainTemplate>
			<Container>
				<Wrapper>
					{newArray.map((data, i) => (
						<ArticleShort data={data} key={i} />
					))}
				</Wrapper>
				<Sidebar />
			</Container>
		</MainTemplate>
	);
};

export const query = graphql`
	query articlesGroupByDate {
		allContentfulArticles(sort: { fields: date, order: DESC }) {
			edges {
				node {
					date(formatString: "DD/MM/YYYY")
					slug
					titlePl
					titleFr
					articleImage {
						fluid(maxWidth: 800) {
							...GatsbyContentfulFluid_withWebp_noBase64
						}
					}
				}
			}
		}
		file(relativePath: { eq: "hero_img.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 800) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
	}
`;

export default injectIntl(Index);
