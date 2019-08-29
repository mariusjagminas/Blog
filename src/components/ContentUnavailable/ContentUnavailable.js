import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

const StyledDiv = styled.div`
	width: 100%;
	min-height: calc(100vh - 227px);
	display: flex;
	justify-content: center;
`;

const Text = styled.h2`
	font-size: 30px;
	width: 200px;
	text-align: center;
	${({ theme }) => theme.mq.laptop} {
		font-size: 55px;
		width: 450px;
	}
`;
const info = {
	pl: 'Treść niedostępna w języku Polskim',
	fr: 'Contenu non disponible en français',
	en: 'Content unavailable in English'
};
const ContentUnavailable = ({ intl: { locale } }) => {
	return (
		<StyledDiv>
			<Text>{info[locale]}</Text>
		</StyledDiv>
	);
};

export default injectIntl(ContentUnavailable);

// TODO: Change component apearance
