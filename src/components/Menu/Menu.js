import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 30px 0;
  width: 100%;
  max-width: 400px;
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  transform: translateX(${({ isMenuOpen }) => (isMenuOpen ? "0" : "100%")});
  transition: transform 0.2s ease-in-out;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.mq.laptop} {
    transform: translateX(0);
    position: static;
    max-width: initial;
    height: auto;
    padding: 0;
    box-shadow: none;
    flex-direction: row;
    align-items: center;
  }
`

const MenuItem = styled.li`
  margin: 20px;
  ${({ theme }) => theme.mq.laptop} {
    margin: 0 15px 0 0;
  }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.primary};
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

const links = [
  { title: "O nas", path: "/" },
  { title: "Literatura", path: "team" },
  { title: "Zespól", path: "team" },
  { title: "0 mnie", path: "team" },
  { title: "iliustracje", path: "team" },
  { title: "contact", path: "read" },
]

const Menu = props => (
  <MenuList {...props}>
    {links.map(link => (
      <MenuItem key={link.title}>
        <StyledLink to={link.path}>{link.title}</StyledLink>
      </MenuItem>
    ))}
  </MenuList>
)

export default Menu
