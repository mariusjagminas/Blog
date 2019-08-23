import React from "react"
import styled from "styled-components"
import Date from "../Date/Date"
import Title from "../Title/Title"
import Content from "../Content/Content"
import Img from "gatsby-image"
import RichTextContenful from "../RichTextContenful/RichTextContenful"

const Wrapper = styled.article`
  width: 100%;
  margin: 0 auto;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImg = styled(Img)`
  max-height: 550px;
  width: 100%;
  background: ${({ theme }) => theme.lightGrey};
`

const ContentWrapper = styled.div`
  padding: 10px;
  width: 100%;
`

const Article = ({ article }) => {
  return (
    <Wrapper>
      <Date date={article.date} />
      <Title title={article.title} />
      <ContentWrapper>
        <StyledImg imgStyle={{ objectFit: "contain" }} fluid={article.image} />
        <RichTextContenful richText={article.content} />
      </ContentWrapper>
      <Content />
    </Wrapper>
  )
}

export default Article
// TODO: Add 'Back to articles' button at the end of a an article
