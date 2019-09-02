import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import RichTextContenful from '../components/RichTextContenful/RichTextContenful';
import HeaderAboutMe from '../components/HeaderAboutMe/HeaderAboutMe';

const ReturnToLink = styled.div`
	max-width: 900px;
	margin: 0 auto;
	padding: 0 20px;
	text-align: left;
	background: ${({ theme }) => theme.bright};
	${({ theme }) => theme.mq.laptop} {
		font-size: ${({ theme }) => theme.font.size.m};
	}
	p {
		margin: 0;
	}
`;

const Index = ({ data, intl, intl: { locale } }) => {
	return (
		<MainTemplate title={intl.formatMessage({ id: 'menu.about_me' })}>
			<ReturnToLink>
				<HeaderAboutMe />
				<RichTextContenful richText={data.page[locale].json} />
			</ReturnToLink>
		</MainTemplate>
	);
};

export default injectIntl(Index);

export const query = graphql`
	query aboutMe {
		page: contentfulPages(pageName: { eq: "about-me" }) {
			pl: childContentfulPagesPagePlRichTextNode {
				json
			}
			fr: childContentfulPagesPageFrRichTextNode {
				json
			}
			en: childContentfulPagesPageEnRichTextNode {
				json
			}
		}
	}
`;
