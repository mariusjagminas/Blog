import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import truncate from 'lodash/truncate';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const Seo = ({ intl, intl: { locale }, seo }) => {
	const {
		site: {
			siteMetadata: { siteUrl, author, defaultImage }
		}
	} = useStaticQuery(query);
	// Default values
	const title = seo.hasOwnProperty('title') ? seo.title : intl.formatMessage({ id: 'seo.title' });
	const imgPath = seo.hasOwnProperty('imgFixed') ? seo.imgFixed : defaultImage;
	const locPrefix = locale === 'pl' ? '' : '/' + locale;
	const slug = seo.hasOwnProperty('slug') ? seo.slug : null;
	const pageUrl = slug ? `${siteUrl}${locPrefix}/${seo.slug}` : siteUrl;
	const description = seo.hasOwnProperty('contentJson')
		? truncate(documentToPlainTextString(seo.contentJson), { length: 200 })
		: intl.formatMessage({ id: 'seo.description' });
	let isPl = seo.hasPlContent ? true : false;
	let isFr = seo.hasFrContent ? true : false;
	let isEn = seo.hasEnContent ? true : false;
	// To add links metatags content must be available in more then one language.
	const isMoreThanOne = ((isFr || isEn) && isPl) || ((isPl || isEn) && isFr) || ((isPl || isFr) && isEn);

	const renderDefaultLink = () => {
		if (isEn) return <link rel="alternate" href={`${siteUrl}/en${slug ? '/' + slug : '/'}`} hreflang="x-default" />;
		if (isFr) return <link rel="alternate" href={`${siteUrl}/fr${slug ? '/' + slug : '/'}`} hreflang="x-default" />;
		if (isPl) return <link rel="alternate" href={`${siteUrl}/pl${slug ? '/' + slug : '/'}`} hreflang="x-default" />;
	};

	return (
		<Helmet>
			<html lang={`${locale}`} />
			{/* FIXME:Remove noindex nofollow metatags for and robots.txt disallow */}
			<meta name="robots" content="noindex,nofollow" />
			{/* Languages tags */}
			{isMoreThanOne && isPl ? (
				<link rel="alternate" href={`${siteUrl}${slug ? '/' + slug : '/'}`} hreflang="pl" />
			) : null}
			{isMoreThanOne && isFr ? (
				<link rel="alternate" href={`${siteUrl}/fr${slug ? '/' + slug : '/'}`} hreflang="fr" />
			) : null}
			{isMoreThanOne && isEn ? (
				<link rel="alternate" href={`${siteUrl}/en${slug ? '/' + slug : '/'}`} hreflang="en" />
			) : null}
			{/* x-default language link */}
			{isMoreThanOne && renderDefaultLink()}
			{/* Esential tags */}
			<title>{title}</title>
			<meta name="description" content={description}></meta>
			<meta name="author" content={author} />
			{/* Open Graph tags */}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={pageUrl} />
			<meta property="og:image" content={`http:${imgPath}`} />
			{/* Twitter tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={author} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={`http:${imgPath}`} />
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

// <link hreflang=""/> meta tags are shown only if content exist at least in two languages.
// To display those links props hasPlContent , hasFrContent, hasEnContent must be set to 'true'
// acording to existing content.
// x-default language tag is not static. Its value depends on which languages are available.
//
// Props has to be delivered in seo{}, Any missing property will be overridden by the default value.
// Default values are:
//
// seo={{
//  title:                     //  about-us page title
// 	contentJson: contentJson,  //  about-us page description
// 	imgFixed: imgFixed,        //  defaultImage from gatsby-config.js
// 	slug: slug,                //  slug '/'
// 	hasPlContent:              //  false
// 	hasFrContent:              //  false
// 	hasEnContent:              //  false
// }}
//
//  <link/> meta tags are added to these pages:
//
//  about-us:
//  articles, articles/1, articles/2: (default path '/')
//  for a single post
//  about-me
//  contact

// TODO: In pages /1, /2, ... there is no self-referencing link-tag, so probalby they will be ignored
// by google. links pointing to main page '/','/en/'
