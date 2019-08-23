import React from "react"
import { Helmet } from "react-helmet"
import { injectIntl } from "gatsby-plugin-intl"

const title = {
  pl: "Literatura najnowsza",
  fr: "Littérature extrême-contemporaine",
  en: "Conteporary literature",
}
const Seo = ({ intl: { locale } }) => {
  return (
    <Helmet>
      <html lang={`${locale}`} />
      <title>{title[locale]}</title>
    </Helmet>
  )
}

export default injectIntl(Seo)
