import React from 'react';
import styled from 'styled-components';
import Date from '../Date/Date';
import Title from '../Title/Title';
import Img from '../Img/Img';
import RichTextContenful from '../RichTextContenful/RichTextContenful';
import ShareLinks from '../ShareLinks/ShareLinks';

const Wrapper = styled.article`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledImg = styled(Img)`
	max-height: 550px;
	width: 100%;
	background: ${({ theme }) => theme.lightGrey};
`;

const ContentWrapper = styled.div`
	padding: 10px;
	width: 100%;
`;

const Article = ({ title, content, image, date, slug }) => {
	return (
		<Wrapper>
			<Date date={date} />
			<Title title={title} />
			<ContentWrapper>
				<StyledImg imgStyle={{ objectFit: 'contain' }} fluid={image} />
				<RichTextContenful richText={content} />
				<ShareLinks slug={slug} title={title} />
			</ContentWrapper>
		</Wrapper>
	);
};

export default Article;
