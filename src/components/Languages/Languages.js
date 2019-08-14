import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"
import flagPoland from "../../assets/images/flag-poland.png"
import flagFrance from "../../assets/images/flag-france.png"
import flagBritish from "../../assets/images/flag-british.jpg"

const Wrapper = styled.div`
  display: ${({ inMobileMenu }) => (inMobileMenu ? "inline-flex" : "none")};
  ${({ theme }) => theme.mq.laptop} {
    display: ${({ inMobileMenu }) => (inMobileMenu ? "none" : "inline-flex")};
  }
`

const ImgWrapper = styled.div`
  width: 35px;
  margin: 0 20px;

  ${({ theme }) => theme.mq.laptop} {
    width: 25px;
    margin: 0 10px;
  }
`

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`

const Language = ({ inMobileMenu }) => {
  return (
    <IntlContextConsumer>
      {() => (
        <Wrapper inMobileMenu={inMobileMenu}>
          <ImgWrapper onClick={() => changeLocale("pl")}>
            <StyledImg src={flagPoland} />
          </ImgWrapper>
          <ImgWrapper onClick={() => changeLocale("fr")}>
            <StyledImg src={flagFrance} />
          </ImgWrapper>
          <ImgWrapper onClick={() => changeLocale("en")}>
            <StyledImg src={flagBritish} />
          </ImgWrapper>
        </Wrapper>
      )}
    </IntlContextConsumer>
  )
}

export default Language
