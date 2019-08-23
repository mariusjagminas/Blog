import React from "react"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"

const StyledDiv = styled.div`
  width: 100%;
  min-height: calc(100vh - 227px);
  display: flex;
  justify-content: center;
`

const Text = styled.h2`
  font-size: 35px;
  padding: 30px;
  text-align: center;
  ${({ theme }) => theme.mq.laptop} {
    font-size: 65px;
  }
`
const info = {
  pl: "Artykuł jeszcze nie zostal przetlumaczony",
  fr: "Article n'a pas encore été traduit",
  en: "Article is not available in English",
}
const ArticleNotAvailable = ({ intl: { locale } }) => {
  return (
    <StyledDiv>
      <Text>{info[locale]}</Text>
    </StyledDiv>
  )
}

export default injectIntl(ArticleNotAvailable)
