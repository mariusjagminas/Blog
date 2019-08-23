import React from "react"
import styled from "styled-components"
import { injectIntl } from "gatsby-plugin-intl"

const StyledDiv = styled.div`
  width: 100%;
`
const fallBackText = {
  pl: "Artykuł jeszcze nie zostal przetlumaczony",
  fr: "Article n'a pas encore été traduit",
  en: "Article is not available in English",
}
const ArticleNotAvailable = ({ intl: { locale } }) => {
  return <StyledDiv>{fallBackText[locale]}</StyledDiv>
}

export default injectIntl(ArticleNotAvailable)
