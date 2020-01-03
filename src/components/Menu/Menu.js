import React from "react"
import styled from "styled-components"
import { injectIntl, Link } from "gatsby-plugin-intl"
import LanguagesSwitcher from "../LanguageSwitcher/LanguageSwitcher"

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 30px 0;
  width: 100%;
  max-width: 400px;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  display: ${({ infooter }) => (infooter ? "none" : "inline-flex")};
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.bright};
  transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? "0" : "-100%")});
  transition: transform 0.2s ease-in-out;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.mq.laptop} {
    display: inline-flex;
    transform: translateY(0);
    position: static;
    width: initial;
    max-width: 100%;
    height: auto;
    padding: 0;
    box-shadow: none;
    flex-direction: row;
    align-items: center;
    background: ${({ theme, infooter }) =>
      infooter ? theme.primaryLight : "none"};
    color: white;
    margin: ${({ infooter }) => (infooter ? "20px" : "0")};
  }
`

const MenuItem = styled.li`
  margin: 20px;
  &:nth-child(3) {
    display: ${({ locale }) => (locale === "fr" ? "inherit" : "none")};
  }
  ${({ theme }) => theme.mq.laptop} {
    margin: 0 8px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme, infooter }) => (infooter ? theme.bright : theme.primary)};
  font-weight: ${({ theme, infooter }) =>
    infooter ? theme.font.weight.regular : theme.font.weight.bold};
  padding: 10px;
  transition: color 0.25s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`

const Menu = ({
  intl,
  intl: { locale },
  isMenuOpen,
  isRedirectToHomePage,
  ...props
}) => {
  const links = [
    { title: intl.formatMessage({ id: "menu.about_us" }), path: "/about-us" },
    { title: intl.formatMessage({ id: "menu.articles" }), path: "/" },
    {
      title: intl.formatMessage({ id: "menu.theater_history" }),
      path: "/history-of-theater",
    },
    {
      title: intl.formatMessage({ id: "menu.about_me" }),
      path: "/about-me",
    },
    { title: intl.formatMessage({ id: "menu.contact" }), path: "/contact" },
  ]

  return (
    <nav>
      <MenuList isMenuOpen={isMenuOpen} {...props}>
        {links.map(link => (
          <MenuItem key={link.title} locale={locale} {...props}>
            <StyledLink
              activeStyle={{ color: "rgb(61, 170, 163)" }}
              {...props}
              to={link.path}
            >
              {link.title}
            </StyledLink>
          </MenuItem>
        ))}
        <MenuItem>
          <LanguagesSwitcher
            isMenuOpen={isMenuOpen}
            isMobileMenu
            isRedirectToHomePage={isRedirectToHomePage}
          />
        </MenuItem>
      </MenuList>
    </nav>
  )
}

export default injectIntl(Menu)
