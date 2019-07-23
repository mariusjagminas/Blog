import React from 'react';
import getLocalizedData from '../../assets/helpers/getLocalizedData';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import H3Sidebar from '../H3Sidebar/H3Sidebar';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Date from '../Date/Date';

const StyledUl = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

const StyledLi = styled.li`
	margin: 30px 0;
	padding: 0;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	display: flex;
`;

const ImgWrapper = styled.div`
	width: 60px;
	height: 60px;
	overflow: hidden;
	border-radius: 60px;
	background: ${({ theme }) => theme.secondary};
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-left: 20px;
`;

const StyledH4 = styled.h4`
	margin: -5px 0;
	color: ${({ theme }) => theme.primary};
`;

const LatestArticles = ({ intl: { locale } }) => {
	const nodes = useStaticQuery(query);
	const articlesData = getLocalizedData(nodes, locale, 0, 10);

	return (
		<>
			<H3Sidebar title={'popular posts'} />
			<StyledUl>
				{articlesData.map((data, i) => (
					<StyledLi key={i}>
						<StyledLink to={data.slug}>
							<ImgWrapper>
								<Img fluid={data.image.fluid} />
							</ImgWrapper>
							<Wrapper>
								<Date small date={data.date} />
								<StyledH4>{data.title}</StyledH4>
							</Wrapper>
						</StyledLink>
					</StyledLi>
				))}
			</StyledUl>
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
						fluid(maxWidth: 50) {
							...GatsbyContentfulFluid_withWebp_noBase64
						}
					}
				}
			}
		}

		file(relativePath: { eq: "hero_img.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 50) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
	}
`;
