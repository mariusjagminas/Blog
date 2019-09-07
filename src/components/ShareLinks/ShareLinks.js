import React from 'react';
import styled, { withTheme, css } from 'styled-components';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon } from 'react-share';
import { injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	padding: ${({ aboutPage }) => (aboutPage ? '20px' : '10px')};
	justify-content: center;
	align-items: center;

	&:before,
	&:after {
		content: '';
		flex: 1;
		height: 1px;
		background: ${({ theme }) => theme.grey};
	}
	${({ theme }) => theme.mq.tablet} {
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

const ShareLinks = ({ theme, aboutPage, slug, intl: { locale } }) => {
	const {
		site: {
			siteMetadata: { siteUrl }
		}
	} = useStaticQuery(query);

	const locPrefix = locale === 'pl' ? '' : '/' + locale;
	const postUrl = slug ? `${siteUrl}${locPrefix}/${slug}` : siteUrl;
	return (
		<Wrapper aboutPage={aboutPage}>
			<IconsWrapper>
				<FacebookButton url={postUrl}>
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
				siteUrl
			}
		}
	}
`;

ShareLinks.defaultProps = {
	aboutPage: false,
	slug: null
};
