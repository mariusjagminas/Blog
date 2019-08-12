import React from "react"
import styled from "styled-components"
import Date from "../Date/Date"
import Title from "../Title/Title"
import Content from "../Content/Content"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import ContentfulImage from "../../assets/helpers/ContentfulImage"

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
`

const ContentWrapper = styled.div`
  padding: 20px;
`
const ImageWrapper = styled.div`
  width: 250px;
  float: left;
  margin-right: 20px;

  &:nth-of-type(even) {
    float: right;
    margin-left: 20px;
  }
`

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <ImageWrapper>
        <ContentfulImage contentfulId={node.data.target.sys.id} />
      </ImageWrapper>
    ),
  },
}

const Article = ({ article }) => {
  return (
    <Wrapper>
      <Date date={article.date} />
      <Title title={article.title} />
      <StyledImg
        imgStyle={{ objectFit: "contain" }}
        fluid={article.image.fluid}
      />
      <ContentWrapper>
        {documentToReactComponents(article.content, options)}
      </ContentWrapper>
      <Content />
    </Wrapper>
  )
}

export default Article
