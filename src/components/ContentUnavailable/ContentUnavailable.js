import React from 'react';
import { injectIntl } from 'gatsby-plugin-intl';
import ReturnToLink from '../ReturnToLink/ReturnToLink';

const info = {
	pl: 'Treść niedostępna w języku Polskim',
	fr: 'Contenu non disponible en français',
	en: 'Content unavailable in English'
};
const ContentUnavailable = ({ intl: { locale } }) => <ReturnToLink text={info[locale]} />;

export default injectIntl(ContentUnavailable);

