import React from "react"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"
import Languages from "../Languages/Languages"

const Nav = styled.nav`
  display: ${({ isMobileMenu }) => (isMobileMenu ? "flex" : "none")};
  position: relative;
  width: 250px;
  height: 35px;
  padding: 0 20px;
  
  ${({ theme }) => theme.mq.laptop} {
    display: ${({ isMobileMenu }) => (isMobileMenu ? "none" : "flex")};
    margin-left: auto;
    width: auto;
  }
`

const LanguageSwitcher = ({
  isMobileMenu,
  isRedirectToHomePage,
}) => {

  return (
    <Nav isMobileMenu={isMobileMenu} >
      <Languages isRedirectToHomePage={isRedirectToHomePage} />
    </Nav>
  )
}

export default injectIntl(LanguageSwitcher)

