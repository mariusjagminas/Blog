import React from 'react';
import styled from 'styled-components';
import Img from '../Img/Img';
import ArticleExcerpt from '../ArticleExcerpt/ArticleExcerpt';

const Article = styled.article``;

const Wrapper = styled.div``;
const Title = styled.h2`
	font-size: 30px;
`;
const ArticlePreviewSmall = ({ title, image, content }) => {
	return (
		<Article>
			<Img fluid={image} />
			<Wrapper>
				<Title>{title}</Title>
				<ArticleExcerpt content={content} length={200} />
			</Wrapper>
		</Article>
	);
};

export default ArticlePreviewSmall;
