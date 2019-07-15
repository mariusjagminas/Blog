import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';
import styled from 'styled-components';

const languageName = {
	pl: 'Polish',
	fr: 'Fraicais'
};

const Wrapper = styled.div`
	display: ${({ inMobileMenu }) => (inMobileMenu ? 'flex' : 'none')};
	${({ theme }) => theme.mq.laptop} {
		display: ${({ inMobileMenu }) => (inMobileMenu ? 'none' : 'flex')};
	}
`;

const Language = props => {
	return (
		<Wrapper {...props}>
			<IntlContextConsumer>
				{({ languages, language: currentLocale }) =>
					languages.map(language => (
						<div
							key={language}
							onClick={() => changeLocale(language)}
							style={{
								color: currentLocale === language ? `red` : `default`,
								margin: 10,
								textDecoration: `none`,
								cursor: `pointer`
							}}
						>
							{languageName[language]}
						</div>
					))
				}
			</IntlContextConsumer>
		</Wrapper>
	);
};

export default Language;
