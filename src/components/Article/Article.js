import React from "react"
import styled from "styled-components"
import Date from "../Date/Date"
import Title from "../Title/Title"
import Content from "../Content/Content"
import Img from "gatsby-image"
import RichTextContenful from "../RichTextContenful/RichTextContenful"

const Wrapper = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImg = styled(Img)`
  max-height: 550px;
  width: 95%;
  background: ${({ theme }) => theme.lightGrey};
`

const ContentWrapper = styled.div`
  padding: 10px;
`

const Article = ({ article }) => {
  return (
    <Wrapper>
      <Date date={article.date} />
      <Title title={article.title} />
      <StyledImg imgStyle={{ objectFit: "contain" }} fluid={article.image} />
      <ContentWrapper>
        <RichTextContenful richText={article.content} />
      </ContentWrapper>
      <Content />
    </Wrapper>
  )
}

export default Article
