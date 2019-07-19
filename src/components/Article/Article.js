import React from "react"
import styled from "styled-components"
import Date from "../Date/Date"
import Title from "../Title/Title"
import Content from "../Content/Content"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

const Wrapper = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ImageWrapper = styled.div`
  width: 95%;
  max-height: 600px;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  padding: 20px;
`
const Article = ({ article }) => {
  return (
    <Wrapper>
      <Date date={"18.02.2019"} />
      <Title title={article.title} />
      <ImageWrapper>
        <Img fluid={article.image.fluid} />
      </ImageWrapper>
      <ContentWrapper>
        {documentToReactComponents(article.content)}
      </ContentWrapper>

      <Content />
    </Wrapper>
  )
}

export default Article
