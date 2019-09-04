import React from 'react';
import styled from 'styled-components';
import Img from '../Img/Img';
import { injectIntl } from 'gatsby-plugin-intl';
import Date from '../Date/Date';
import Title from '../Title/Title';
import SharedLinks from '../ShareLinks/ShareLinks';
import ArticleExcerpt from '../ArticleExcerpt/ArticleExcerpt';
import { LinkFramed } from '../../assets/styles/Links';

const ArticleWrapper = styled.article`
	width: 100%;
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

const ArticlePreview = ({ date, title, image, content, slug, intl }) => {
	return (
		<ArticleWrapper>
			<Date date={date} />
			<Title title={title} />
			<Wrapper>
				<StyledImg imgStyle={{ objectFit: 'contain' }} fluid={image} />
				<StyledExerpt content={content} length={500} />
				<SharedLinks slug={slug} title={title} />
			</Wrapper>
			<LinkFramed to={`/${slug}`}>{intl.formatMessage({ id: 'article.read' })}</LinkFramed>
		</ArticleWrapper>
	);
};

export default injectIntl(ArticlePreview);
