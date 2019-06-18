import React from "react"
import styled from "styled-components"
import Menu from "../Menu/Menu"

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.primary};
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.bright};
  margin: 0;
  padding-top: 20px;
`

const Footer = () => (
  <Wrapper>
    <Menu isFooterMenu={true} />
    <Copyright> &copy; 2019 Pawel Hładki</Copyright>
  </Wrapper>
)

export default Footer
