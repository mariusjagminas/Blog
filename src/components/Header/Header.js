import React from "react"
import styled from "styled-components"
import Menu from "../Menu/Menu"
import { useState } from "react"
import Hamburger from "../Hamburger/Hamburger"
import Banner from "../Banner/Banner"
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher"

const Wrapper = styled.div`
  max-width: 1420px;
  padding: 0 20px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: ${({ theme }) => theme.bright};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  ${({ theme }) => theme.mq.laptop} {
    position: static;
    height: 68px;
    box-shadow: none;
  }
`
const EmptySpaceFiller = styled.div`
  width: 100%;
  height: 60px;
  ${({ theme }) => theme.mq.laptop} {
    display: none;
  }
`

const Header = () => {
  const [isMenuOpen, setState] = useState(false)

  const toggleMenu = () => {
    setState(!isMenuOpen)
  }

  return (
    <header>
      <Wrapper>
        <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} />
        <LanguageSwitcher />
      </Wrapper>
      <EmptySpaceFiller />
      <Banner />
    </header>
  )
}

export default Header
