import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';
import GlobalStyle from '../../assets/styles/GlobalStyle';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Seo from '../../components/Seo/Seo';

const Container = styled.main`
	max-width: 100%;
`;

const MainTemplate = ({ seo, children, isRedirectToHomePage }) => {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<>
					<Seo seo={seo} />
					<Header isRedirectToHomePage={isRedirectToHomePage} />
					<Container>{children}</Container>
					<Footer />
				</>
			</ThemeProvider>
		</>
	);
};

export default MainTemplate;
