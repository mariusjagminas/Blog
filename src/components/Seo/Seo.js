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
			{/* Esential tags  */}
			<meta property="og:title" content={title || intl.formatMessage({ id: 'seo.title' })} />
			<meta property="og:description" content={description || intl.formatMessage({ id: 'seo.description' })} />
			<meta property="og:image" content={image} />
			<meta property="og:url" content={url || baseUrl} />
			<meta name="twitter:card" content="summary_large_image" />
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
