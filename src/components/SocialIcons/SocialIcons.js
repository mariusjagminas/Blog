import React from "react"
import styled from "styled-components"
import { FaFacebookF, FaTwitter } from "react-icons/fa"

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-left: ${({ articleicons }) => (articleicons ? "none" : "auto")};
  min-width: ${({ articleicons }) => (articleicons ? "120px" : "60px;")};
`

const StyledLink = styled.a`
  display: ${({ articleicons }) => (articleicons ? "initial" : "none")};
  color: ${({ theme, articleicons }) =>
    articleicons ? theme.bright : theme.primary};
  font-size: 16px;
  background: ${({ theme, articleicons }) =>
    articleicons ? theme.secondary : "none"};
  border-radius: 30px;
  padding: 6px 8px;
  transition: color 0.25s ease-in-out;

  :hover {
    color: ${({ theme, articleicons }) =>
      articleicons ? theme.primary : theme.secondary};
  }

  ${({ theme }) => theme.mq.laptop} {
    display: initial;
  }
`

const SocialIcons = props => (
  <IconsWrapper {...props}>
    <StyledLink
      {...props}
      href={
        "https://www.facebook.com/Litt%C3%A9rature-extr%C3%AAme-contemporaineLiteratura-najnowsza-180172648750803/"
      }
    >
      <FaFacebookF />
    </StyledLink>
    <StyledLink {...props} href={"https://twitter.com/pawelhladki"}>
      <FaTwitter />
    </StyledLink>
  </IconsWrapper>
)

export default SocialIcons
