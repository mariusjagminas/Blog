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

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.secondary};
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

const StyledText = styled.p`
  margin: 7px 0 0 12px;
  font-family: ${({ theme }) => theme.font.family.main};
  font-size: 14px;

  ${({ theme }) => theme.mq.laptop} {
    margin: 7px 0 0 5px;
  }

`

const Languages = ({ isRedirectToHomePage }) => {
  const path = isRedirectToHomePage ? "/" : null
  const data = [
    { locale: "/", img: flagPoland, text: "Polski" },
    { locale: "fr", img: flagFrance, text: "Français" },
    { locale: "en", img: flagBritish, text: "English" },
  ]
  return (
    <StyledUl >
      {data.map(({ locale, img, text }, i) => (
        <StyledLi key={i}>
          <StyledButton onClick={() => changeLocale(locale, path)}>
            <ImgWrapper>
              <StyledImg src={img} alt={"flag picture"} />
            </ImgWrapper>
            <StyledText>{text}</StyledText>
          </StyledButton>
        </StyledLi>
      ))}
    </StyledUl>
  )
}

export default Languages

Languages.defaultProps = {
  isRedirectToHomePage: false,
}
