import React from "react"
import { changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"
import flagPoland from "../../assets/images/flag-poland.png"
import flagFrance from "../../assets/images/flag-france.png"
import flagBritish from "../../assets/images/flag-uk.png"

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.mq.laptop} {
    display: ${({ inMobileMenu }) => (inMobileMenu ? "none" : "flex")};
  }
`

const StyledButton = styled.button`
  border: none;
  display: flex;
  background: ${({ theme }) => theme.bright};
  height: 37px;
  margin: 5px;
  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mq.laptop} {
    margin: 0;
    padding: 5px 20px 5px 0;
    height: auto;
    &:hover {
      background: ${({ theme }) => theme.secondaryLight};
    }
  }
`

const ImgWrapper = styled.div`
  width: 30px;

  ${({ theme }) => theme.mq.laptop} {
    width: 30px;
    margin: 0 10px;
  }
`
const StyledImg = styled.img`
  width: 100%;
  height: auto;
`

const StyledText = styled.p`
  margin: 6px 0 0 10px;
`

const Languages = ({ inMobileMenu }) => {
  return (
    <>
      <StyledUl inMobileMenu={inMobileMenu}>
        <StyledButton onClick={() => changeLocale("pl")}>
          <ImgWrapper>
            <StyledImg src={flagPoland} />
          </ImgWrapper>
          <StyledText>Polski</StyledText>
        </StyledButton>
        <StyledButton onClick={() => changeLocale("fr")}>
          <ImgWrapper>
            <StyledImg src={flagFrance} />
          </ImgWrapper>
          <StyledText>Français</StyledText>
        </StyledButton>
        <StyledButton onClick={() => changeLocale("en")}>
          <ImgWrapper>
            <StyledImg src={flagBritish} />
          </ImgWrapper>
          <StyledText>English</StyledText>
        </StyledButton>
      </StyledUl>
    </>
  )
}

export default Languages
