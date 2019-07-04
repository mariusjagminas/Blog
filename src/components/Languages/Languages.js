import React from "react"
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl"
import styled from "styled-components"

const languageName = {
  pl: "Polish",
  fr: "Fraicais",
}

const Wrapper = styled.div`
position: fixed;
left 0;
top: 0;
border: 2px solid black;
`

const Language = () => {
  return (
    <Wrapper>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <div
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `red` : `blue`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </div>
          ))
        }
      </IntlContextConsumer>
    </Wrapper>
  )
}

export default Language
