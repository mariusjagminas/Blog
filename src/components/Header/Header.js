import React from "react"
import styled from "styled-components"
import Menu from "../Menu/Menu"
import { useState } from "react"
import Hamburger from "../Hamburger/Hamburger"
import SocialIcons from "../SocialIcons/SocialIcons"
import Banner from "../Banner/Banner"
import Languages from '../Languages/Languages'

const Wrapper = styled.div`
  max-width: 960px;
  height: 55px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const Header = () => {
  const [isMenuOpen, setState] = useState(false)

  const toggleMenu = () => {
    setState(!isMenuOpen)
  }

  return (
    <>
      <Wrapper>
        <Hamburger onClick={toggleMenu} isMenuOpen={isMenuOpen} />
        <Menu isMenuOpen={isMenuOpen} />
        <SocialIcons />
        <Languages/>
      </Wrapper>
      <Banner />
    </>
  )
}

export default Header
