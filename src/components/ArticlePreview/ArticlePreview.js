import React from 'react';
import styled from 'styled-components';
import Img from '../Img/Img';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import Date from '../Date/Date';
import Title from '../Title/Title';
import SharedLinks from '../ShareLinks/ShareLinks';
import ArticleExcerpt from '../ArticleExcerpt/ArticleExcerpt';

const ArticleWrapper = styled.article`
	width: 100%;
	max-width: 880px;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	${({ theme }) => theme.mq.laptop} {
		padding-bottom: 20px;
	}
`;
const StyledImg = styled(Img)`
	max-height: 550px;
	width: 100%;
	background: ${({ theme }) => theme.lightGrey};
`;

const StyledExerpt = styled(ArticleExcerpt)`
	margin: 15px 0 0 0;
`;

const Wrapper = styled.div`
	padding: 0 10px 10px 10px;
	width: 100%;
`;
const StyledLink = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.primaryLight};
	border: 1px solid ${({ theme }) => theme.grey};
	border-radius: 3px;
	position: relative;
	margin-top: -10px;
	padding: 6px 40px;
	transition-property: background-color, border;
	transition-duration: 0.5s;
	&:before {
		content: '';
		position: absolute;
		top: 2px;
		bottom: 2px;
		left: 2px;
		right: 2px;
		border: 1px solid ${({ theme }) => theme.grey};
		border-radius: 3px;
	}

	&:hover {
		background: ${({ theme }) => theme.secondaryLight};
		border: 1px solid ${({ theme }) => theme.secondary};

		:before {
			border: 1px solid ${({ theme }) => theme.secondary};
		}
	}
	${({ theme }) => theme.mq.laptop} {
		margin: 0px;
	}
`;

const ArticlePreview = ({ date, title, image, content, slug, intl }) => {
	return (
		<ArticleWrapper>
			<Date date={date} />
			<Title title={title} />
			<Wrapper>
				<StyledImg imgStyle={{ objectFit: 'contain' }} fluid={image} />
				<StyledExerpt content={content} length={500} />
				<SharedLinks />
			</Wrapper>
			<StyledLink to={`/${slug}`}>{intl.formatMessage({ id: 'article.read' })}</StyledLink>
		</ArticleWrapper>
	);
};

export default injectIntl(ArticlePreview);
