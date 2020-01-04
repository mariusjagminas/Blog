import React from "react"
import styled from "styled-components"

const StyledHamburger = styled.button`
  position: absolute;
  z-index: 1000;
  top: 15px;
  right: 15px;
  padding: 15px 10px;
  background: none;
  border: none;
  outline: none;
  ${({ theme }) => theme.mq.laptop} {
    display: none;
  }
`

const Bar = styled.div`
  position: relative;
  width: 20px;
  height: 2px;
  background: ${({ isMenuOpen }) =>
    isMenuOpen ? "transparent" : ({ theme }) => theme.primary};

  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    left: 0;
    background: ${({ theme }) => theme.primary};
    transition: transform 0.25s ease-in-out;
  }

  ::before {
    top: -6px;
    transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? "6px" : "0")})
      rotate(${({ isMenuOpen }) => (isMenuOpen ? "45deg" : "0")});
  }

  ::after {
    top: 6px;
    transform: translateY(${({ isMenuOpen }) => (isMenuOpen ? "-6px" : "0")})
      rotate(${({ isMenuOpen }) => (isMenuOpen ? "-45deg" : "0")});
  }
`

const Hamburger = props => (
  <StyledHamburger {...props}>
    <Bar {...props} />
  </StyledHamburger>
)

export default Hamburger
