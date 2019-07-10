import React from "react"
import styled from "styled-components"
import Date from "../Date/Date"
import Title from "../Title/Title"
import Content from "../Content/Content"
import { injectIntl } from "gatsby-plugin-intl"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentWrapper = styled.div`
  padding: 20px;
`

const Article = ({ intl: { locale }, article }) => (
  <Wrapper>
    <Date date={"18.02.2019"} />
    <Title title={article.title[locale]} />
    <ContentWrapper>
      {documentToReactComponents(article.content[locale])}
    </ContentWrapper>

    <Content />
  </Wrapper>
)

export default injectIntl(Article)
