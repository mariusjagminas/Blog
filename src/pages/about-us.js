import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import Hero from '../components/Hero/Hero';
import { graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import RichTextContenful from '../components/RichTextContenful/RichTextContenful';
import ShareLinks from '../components/ShareLinks/ShareLinks';

const ReturnToLink = styled.div`
	max-width: 780px;
	margin: 0 auto;
	padding: 0 10px;
	text-align: center;
	${({ theme }) => theme.mq.laptop} {
		font-size: ${({ theme }) => theme.font.size.m};
	}
`;

const Index = ({ data, intl: { locale } }) => {
	return (
		<MainTemplate>
			<Hero data={data} />
			<ReturnToLink>
				<RichTextContenful richText={data.page[locale].json} />
				<ShareLinks aboutPage />
			</ReturnToLink>
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
// TODO: add og: links to seo component
// TODO: Make <Links lang=''/> available for every article
// for pages articles/ archive/ conections only with first article pages
