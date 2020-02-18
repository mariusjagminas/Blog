import React from "react"
import { changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"
import flagPoland from "../../assets/images/flag-poland.png"
import flagFrance from "../../assets/images/flag-france.png"
import flagBritish from "../../assets/images/flag-uk.png"
import { injectIntl } from "gatsby-plugin-intl"

const StyledUl = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`

const StyledLi = styled.li`
  margin: 0;
  padding: 0;
`

const StyledButton = styled.button`
  border: none;
  display: flex;
  background: ${({ theme }) => theme.bright};
  height: 50px;

  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.mq.laptop} {
    margin: 0 5px;
    padding: 0;
    height: auto;
    ${({ activeButton, theme }) => activeButton ? `border-bottom: 1px solid ${theme.secondary}` : null};
    opacity: 1;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`

const ImgWrapper = styled.div`
  width: 30px;

  ${({ theme }) => theme.mq.laptop} {
    width: 30px;
    margin: 0 5px;
  }
`
const StyledImg = styled.img`
  width: 100%;
  height: auto;
`

const Languages = ({
  isRedirectToHomePage,
  intl: { locale: currentLocale }
}) => {

  const path = isRedirectToHomePage ? "/" : null
  const data = [
    { locale: "pl", img: flagPoland },
    { locale: "fr", img: flagFrance },
    { locale: "en", img: flagBritish },
  ]

  return (
    <StyledUl >
      {data.map(({ locale, img }, i) => (
        <StyledLi key={i}>
          <StyledButton activeButton={locale === currentLocale} onClick={() => changeLocale(locale, path)}>
            <ImgWrapper>
              <StyledImg src={img} alt={"flag picture"} />
            </ImgWrapper>
          </StyledButton>
        </StyledLi>
      ))
      }
    </StyledUl >
  )
}

export default injectIntl(Languages)

Languages.defaultProps = {
  isRedirectToHomePage: false,
}
