import React from 'react';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ContentfulImage from '../../assets/helpers/ContentfulImage';
import styled from 'styled-components';

const ImageWrapper = styled.div`
	width: 100%;

	${({ theme }) => theme.mq.tablet} {
		margin-left: 20px;
		float: right;
		width: 300px;
		&:nth-of-type(even) {
			float: left;
			margin-right: 20px;
		}
	}
`;

const StyledB = styled.b`
	color: ${({ theme }) => theme.primary};
`;

const StyledA = styled.a`
	color: ${({ theme }) => theme.secondaryDark};
`;
const Bold = ({ children }) => <StyledB>{children}</StyledB>;

const StyledHyperlink = ({ children, href }) => <StyledA href={href}>{children}</StyledA>;

const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: node => (
			<ImageWrapper>
				<ContentfulImage contentfulId={node.data.target.sys.id} />
			</ImageWrapper>
		),
		[INLINES.HYPERLINK]: node => <StyledHyperlink href={node.data.uri}>{node.content[0].value}</StyledHyperlink>
	},
	renderMark: {
		[MARKS.BOLD]: text => <Bold>{text}</Bold>
	}
};

const RichTextContenful = ({ richText }) => {
	return <>{documentToReactComponents(richText, options)}</>;
};

export default RichTextContenful;
