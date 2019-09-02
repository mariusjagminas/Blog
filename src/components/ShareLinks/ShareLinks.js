import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';
import { injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
	display: ${({ aboutPage }) => (aboutPage ? 'flex' : 'none')};
	width: 100%;
	padding: ${({ aboutPage }) => (aboutPage ? '20px' : '5px')};
	justify-content: center;
	align-items: center;

	&:before,
	&:after {
		content: '';
		flex: 1;
		height: 1px;
		background: ${({ theme }) => theme.grey};
	}
	${({ theme }) => theme.mq.laptop} {
		display: flex;
		padding: ${({ aboutPage }) => (aboutPage ? '30px' : '15px 0')};
	}
`;

const IconsWrapper = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-around;
`;
const sharedStyle = css`
	transition: opacity 0.2s ease-in-out;

	&:focus {
		outline: 0;
	}

	&:hover {
		cursor: pointer;
		opacity: 0.4;
	}
`;

const FacebookButton = styled(FacebookShareButton)`
	${sharedStyle}
`;
const TwitterButton = styled(TwitterShareButton)`
	${sharedStyle}
`;

const ShareLinks = ({ theme, aboutPage, slug, intl: { locale }, title }) => {
	const {
		site: {
			siteMetadata: { baseUrl }
		}
	} = useStaticQuery(query);

	const postUrl = `${baseUrl}${locale === 'pl' ? '' : '/' + locale}/${slug} `;

	return (
		<Wrapper aboutPage={aboutPage}>
			<IconsWrapper>
				<FacebookButton url={postUrl} quote={title}>
					<FacebookIcon size={30} round={true} iconBgStyle={{ fill: `${theme.secondary}` }} />
				</FacebookButton>
				<TwitterButton url={postUrl}>
					<TwitterIcon size={30} round={true} iconBgStyle={{ fill: `${theme.secondary}` }} />
				</TwitterButton>
			</IconsWrapper>
		</Wrapper>
	);
};

export default injectIntl(withTheme(ShareLinks));

const query = graphql`
	query shareLinks {
		site {
			siteMetadata {
				baseUrl
			}
		}
	}
`;
