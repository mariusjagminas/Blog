import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import truncate from 'lodash/truncate';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const Seo = ({ intl, intl: { locale }, seo: { title, imgFixed, slug, contentJson, isLangLinkAdded } }) => {
	const {
		site: {
			siteMetadata: { baseUrl, author, defaultImage }
		}
	} = useStaticQuery(query);

	const description = truncate(documentToPlainTextString(contentJson), { length: 200 });
	const image = `http:${imgFixed || defaultImage}`;

	const locPrefix = locale === 'pl' ? '' : '/' + locale;
	const url = slug ? `${baseUrl}${locPrefix}/${slug} ` : null;

	return (
		<Helmet>
			<html lang={`${locale}`} />
			{/* FIXME:Remove noindex nofollow metatags for */}
			<meta name="robots" content="noindex,nofollow" />
			{/* Languages tags */}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${baseUrl}${slug ? '/' + slug : ''}`} hreflang="pl" />
			) : null}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${baseUrl}/fr${slug ? '/' + slug : ''}`} hreflang="fr" />
			) : null}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${baseUrl}/en${slug ? '/' + slug : ''}`} hreflang="x-default" />
			) : null}
			{isLangLinkAdded ? (
				<link rel="alternate" href={`${baseUrl}/en${slug ? '/' + slug : ''}`} hreflang="en" />
			) : null}
			{/* Esential tags */}
			<title>{title || intl.formatMessage({ id: 'seo.title' })}</title>
			<meta name="description" content={description || intl.formatMessage({ id: 'seo.description' })}></meta>
			<meta name="author" content={author} />
			{/* Open Graph tags */}
			<meta property="og:title" content={title || intl.formatMessage({ id: 'seo.title' })} />
			<meta property="og:description" content={description || intl.formatMessage({ id: 'seo.description' })} />
			<meta property="og:url" content={url || baseUrl} />
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
	seo: { title: null, imgFixed: null, slug: null, contentJson: null, isLangLinkAdded: true }
};

const query = graphql`
	query Seo {
		site {
			siteMetadata {
				baseUrl
				author
				defaultImage
			}
		}
	}
`;

//  <link hreflang=""/> meta tags are not embeded in these pages:
// 1. history-of-theater
// 2. post-history-of-theater
// 3. archive
