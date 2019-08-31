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

const StyledHyperlink = styled.a`
	color: ${({ theme }) => theme.secondaryDark};
`;
const Bold = ({ children }) => <StyledB>{children}</StyledB>;

const HyperlinkToUrl = ({ children, href }) => <StyledHyperlink href={href}>{children}</StyledHyperlink>;
const HyperlinkToAsset = ({ children, href }) => <StyledHyperlink href={href}>{children}</StyledHyperlink>;

const options = {
	renderNode: {
		[BLOCKS.EMBEDDED_ASSET]: node => (
			<ImageWrapper>
				<ContentfulImage contentfulId={node.data.target.sys.id} />
			</ImageWrapper>
		),
		[INLINES.HYPERLINK]: node => <HyperlinkToUrl href={node.data.uri}>{node.content[0].value}</HyperlinkToUrl>,
		[INLINES.ASSET_HYPERLINK]: node => (
			<HyperlinkToAsset href={`${node.data.target.fields.file['pl-PL'].url}`}>
				{node.content[0].value}
			</HyperlinkToAsset>
		)
	},
	renderMark: {
		[MARKS.BOLD]: text => <Bold>{text}</Bold>
	}
};

const RichTextContenful = ({ richText }) => {
	return <>{documentToReactComponents(richText, options)}</>;
};

export default RichTextContenful;
