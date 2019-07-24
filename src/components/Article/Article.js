import React from 'react';
import styled from 'styled-components';
import Date from '../Date/Date';
import Title from '../Title/Title';
import Content from '../Content/Content';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Img from 'gatsby-image';

const Wrapper = styled.div`
	width: 100%;
	max-width: 880px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledImg = styled(Img)`
	max-height: 550px;
	width: 95%;
`;

const ContentWrapper = styled.div`
	padding: 20px;
`;
const Article = ({ article }) => {
	return (
		<Wrapper>
			<Date date={article.date} />
			<Title title={article.title} />
			<StyledImg imgStyle={{ objectFit: 'contain' }} fluid={article.image.fluid} />
			<ContentWrapper>{documentToReactComponents(article.content)}</ContentWrapper>
			<Content />
		</Wrapper>
	);
};

export default Article;
