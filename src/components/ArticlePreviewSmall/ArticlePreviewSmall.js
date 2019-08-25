import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Title from '../Title/Title';
import ArticleExcerpt from '../ArticleExcerpt/ArticleExcerpt';

const Article = styled.article``;
const ImgWrapper = styled.div`
	width: 100%;
	max-width: 600px;
`;
const Wrapper = styled.div``;

const ArticlePreviewSmall = ({ data }) => {
	return (
		<Article>
			<ImgWrapper>
				<Img fluid={data.image} />
			</ImgWrapper>
			<Wrapper>
				<Title title={data.title} />
				<ArticleExcerpt content={data.content} length={200} />
			</Wrapper>
		</Article>
	);
};

export default ArticlePreviewSmall;
