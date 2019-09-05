import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import Hero from '../components/Hero/Hero';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import RichTextContenful from '../components/RichTextContenful/RichTextContenful';
import ShareLinks from '../components/ShareLinks/ShareLinks';

const Wrapper = styled.div`
	max-width: 780px;
	margin: 0 auto;
	padding: 0 10px;
	text-align: center;
	${({ theme }) => theme.mq.laptop} {
		font-size: ${({ theme }) => theme.font.size.m};
	}
`;

const Index = ({ data, intl, intl: { locale } }) => {
	return (
		<MainTemplate title={intl.formatMessage({ id: 'menu.about_us' })}>
			<Hero data={data} />
			<Wrapper>
				<RichTextContenful richText={data.page[locale].json} />
				<ShareLinks aboutPage />
			</Wrapper>
		</MainTemplate>
	);
};

export const query = graphql`
	query aboutUs {
		file(relativePath: { eq: "hero_img.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
		page: contentfulPages(pageName: { eq: "about-us" }) {
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
export default injectIntl(Index);
// TODO: Get content for english version about-us and update content for french/polish(strona dwujenzycna)

// for pages articles/ archive/ conections only with first article pages
// TODO: add google analitics
// TODO: Add contact form
