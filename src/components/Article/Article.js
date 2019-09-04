import React from 'react';
import styled from 'styled-components';
import Date from '../Date/Date';
import Title from '../Title/Title';
import Img from '../Img/Img';
import RichTextContenful from '../RichTextContenful/RichTextContenful';
import ShareLinks from '../ShareLinks/ShareLinks';
import { ContentWrapper, RichTextWrapper } from '../../assets/styles/layout';

const StyledImg = styled(Img)`
	max-height: 550px;
	width: 100%;
	background: ${({ theme }) => theme.lightGrey};
`;

const Article = ({ title, content, image, date, slug }) => {
	return (
		<ContentWrapper>
			<Date date={date} />
			<Title title={title} />
			<RichTextWrapper>
				<StyledImg imgStyle={{ objectFit: 'contain' }} fluid={image} />
				<RichTextContenful richText={content} />
				<ShareLinks slug={slug} title={title} />
			</RichTextWrapper>
		</ContentWrapper>
	);
};

export default Article;
