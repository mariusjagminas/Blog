import React from 'react';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'gatsby-plugin-intl';

const defaultTitle = {
	pl: 'Literatura najnowsza',
	fr: 'Littérature extrême-contemporaine',
	en: 'Conteporary literature'
};
const Seo = ({ intl: { locale }, title }) => {
	return (
		<Helmet>
			<html lang={`${locale}`} />
			<title>{title || defaultTitle[locale]}</title>
			<meta name="author" content="Pawel Hladki" />w
		</Helmet>
	);
};

export default injectIntl(Seo);
