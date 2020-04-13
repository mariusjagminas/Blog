import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../../assets/styles/theme"
import GlobalStyle from "../../assets/styles/GlobalStyle"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Seo from "../../components/Seo/Seo"

const Container = styled.main`
  max-width: 100%;
  flex-grow: 1;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainTemplate = ({ seo, children, isRedirectToHomePage }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Seo seo={seo} />
          <Header isRedirectToHomePage={isRedirectToHomePage} />
          <Container>{children}</Container>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default MainTemplate
