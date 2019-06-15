import React from "react"
import styled from "styled-components"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledLink = styled.a`
  display: none;
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  margin-left: 20px;
  transition: color 0.25s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.secondary};
  }

  ${({ theme }) => theme.mq.laptop} {
    display: initial;
  }
`

const SocialIcons = () => (
  <IconsWrapper>
    <StyledLink
      href={
        "https://www.facebook.com/Litt%C3%A9rature-extr%C3%AAme-contemporaineLiteratura-najnowsza-180172648750803/"
      }
    >
      <FaFacebookF />
    </StyledLink>
    <StyledLink href={"https://twitter.com/pawelhladki"}>
      <FaTwitter />
    </StyledLink>
  </IconsWrapper>
)

export default SocialIcons
