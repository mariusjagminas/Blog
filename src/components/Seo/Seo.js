import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import truncate from 'lodash/truncate';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const Seo = ({ intl, intl: { locale }, seo }) => {
	// Default props and data validation
	const isLangLinkAdded = seo.hasOwnProperty('isLangLinkAdded') ? seo.isLangLinkAdded : true;
	const title = seo.title || null;
	const imgFixed = seo.imgFixed || null;
	const slug = seo.slug || null;
	const contentJson = seo.contentJson || null;
	const {
		site: {
			siteMetadata: { siteUrl, author, defaultImage }
		}
	} = useStaticQuery(query);

	const description = truncate(documentToPlainTextString(contentJson), { length: 200 });
	const image = `http:${imgFixed || defaultImage}`;

	const locPrefix = locale === 'pl' ? '' : '/' + locale;
	const url = slug ? `${siteUrl}${locPrefix}/${slug} ` : null;

	return (
		<Helmet>
			<html lang={`${locale}`} />
			{/* FIXME:Remove noindex nofollow metatags for */}
			<meta name="robots" content="noindex,nofollow" />
			{/* Languages tags */}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${siteUrl}${slug ? '/' + slug : ''}`} hreflang="pl" />
			) : null}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${siteUrl}/fr${slug ? '/' + slug : ''}`} hreflang="fr" />
			) : null}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${siteUrl}/en${slug ? '/' + slug : ''}`} hreflang="x-default" />
			) : null}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${siteUrl}/en${slug ? '/' + slug : ''}`} hreflang="en" />
			) : null}
			{/* Esential tags */}
			<title>{title || intl.formatMessage({ id: 'seo.title' })}</title>
			<meta name="description" content={description || intl.formatMessage({ id: 'seo.description' })}></meta>
			<meta name="author" content={author} />
			{/* Open Graph tags */}
			<meta property="og:title" content={title || intl.formatMessage({ id: 'seo.title' })} />
			<meta property="og:description" content={description || intl.formatMessage({ id: 'seo.description' })} />
			<meta property="og:url" content={url || siteUrl} />
			<meta property="og:image" content={image} />
			{/* Twitter tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={author} />
			<meta name="twitter:title" content={title || intl.formatMessage({ id: 'seo.title' })} />
			<meta name="twitter:description" content={description || intl.formatMessage({ id: 'seo.description' })} />
			<meta name="twitter:image" content={image} />
		</Helmet>
	);
};

export default injectIntl(Seo);

Seo.defaultProps = {
	seo: {}
};

const query = graphql`
	query Seo {
		site {
			siteMetadata {
				siteUrl
				author
				defaultImage
			}
		}
	}
`;

//  <link hreflang=""/> meta tags are hidden in these pages:
// 1. history-of-theater
// 2. post-history-of-theater
// 3. archive
// In post page for paths "/1","/2",... <linl hreflang=""/> points to "/"
