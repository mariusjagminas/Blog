import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { injectIntl } from "gatsby-plugin-intl"

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
  display: ${({ isFooterMenu }) => (isFooterMenu ? "none" : "inline-flex")};
  flex-direction: column;
  align-items: center;
  background: #ffffff;
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
    background: ${({ theme, isFooterMenu }) =>
      isFooterMenu ? theme.primary : "none"};
    color: white;
  }
`

const MenuItem = styled.li`
  margin: 20px;
  ${({ theme }) => theme.mq.laptop} {
    margin: 0 8px;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${({ theme, isFooterMenu }) =>
    isFooterMenu ? theme.bright : theme.primary};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  padding: 10px;
  transition: color 0.25s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.secondary};
  }

  ${({ theme }) => theme.mq.laptop} {
    font-size: ${({ theme }) => theme.font.size.s};
  }
`

const Menu = ({ intl, ...props }) => {

  const links = [
    { title: intl.formatMessage({ id: "menu.about" }), path: "/" },
    { title: intl.formatMessage({ id: "menu.english" }), path: "/literature" },
    { title: intl.formatMessage({ id: "menu.team" }), path: "/" },
    { title: intl.formatMessage({ id: "menu.about_me" }), path: "/" },
    { title: intl.formatMessage({ id: "menu.design" }), path: "/" },
  ]

  return (
    <MenuList {...props}>
      {links.map(link => (
        <MenuItem key={link.title}>
          <StyledLink to={link.path}>{link.title}</StyledLink>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default injectIntl(Menu)
