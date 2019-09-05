import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import truncate from 'lodash/truncate';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

const Seo = ({ intl, intl: { locale }, seo: { title, imgFixed, slug, contentJson } }) => {
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
	seo: { title: null, imgFixed: null, slug: null, contentJson: null }
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

// TODO: Make <Links rel='alternate' lang=''/> available for every article??

// query for image
