import React from "react"
import MainTemplate from "../../templates/MainTemplate/MainTemplate"
import { graphql } from "gatsby"
import { injectIntl} from "gatsby-plugin-intl"

const Article = ({ data, intl }) => {
  console.log(intl.locale)
  const { polishTitle, frenchTitle } = data.contentfulArticle

  const title =
    polishTitle && intl.locale === "pl"
      ? polishTitle
      : frenchTitle && intl.locale === "fr"
      ? frenchTitle
      : intl.locale === "pl"
      ? "niema artykulu"
      : "no article"
  return (
    <MainTemplate>
      <h1>{title}</h1>
      <h1>Hello</h1>
    </MainTemplate>
  )
}

export default injectIntl(Article)

export const query = graphql`
query MyQuery($nodeid: String) {
  contentfulArticle(nodeid: {eq: $nodeid}){
    polishTitle
    frenchTitle
  }
}

`
