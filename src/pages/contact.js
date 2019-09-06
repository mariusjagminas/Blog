import React from 'react';
import MainTemplate from '../templates/MainTemplate/MainTemplate';
import Hero from '../components/Hero/Hero';
import { injectIntl } from 'gatsby-plugin-intl';
import styled from 'styled-components';
import { graphql } from 'gatsby';

const Wrapper = styled.div`
	max-width: 780px;
	margin: 0 auto;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: calc(100vh - 746px);
	${({ theme }) => theme.mq.laptop} {
		min-height: 300px;
	}
`;

const H2 = styled.h2`
	font-size: ${({ theme }) => theme.font.size.xl};
	text-align: center;
`;

const Mail = styled.p`
	font-size: 25px;
`;

const Index = ({ data, intl }) => {
	return (
		<MainTemplate seo={{ title: intl.formatMessage({ id: 'contact.title' }), slug: 'contact' }}>
			<Hero data={data} />
			<Wrapper>
				<H2>{intl.formatMessage({ id: 'contact.title' })}</H2>
				<Mail>p.hladki@yahoo.fr</Mail>
			</Wrapper>
		</MainTemplate>
	);
};

export default injectIntl(Index);

export const query = graphql`
	query contact {
		file(relativePath: { eq: "mail_img.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_withWebp_noBase64
				}
			}
		}
	}
`;
