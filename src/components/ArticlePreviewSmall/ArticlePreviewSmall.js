import React from "react"
import styled from "styled-components"
import Img from "../Img/Img"
import ArticleExcerpt from "../ArticleExcerpt/ArticleExcerpt"
import { Link } from "gatsby-plugin-intl"

const Article = styled.article`
  max-width: 450px;
  padding: 0 10px;
  margin: 30px auto;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    max-width: 100%;
    margin: 65px auto;
  }
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

const StyledImg = styled(Img)`
  min-width: 50%;
  height: 140px;
  ${({ theme }) => theme.mq.tablet} {
    min-width: 440px;
    height: 280px;
    /* box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.19); */
  }
`

const Wrapper = styled.div`
  flex-grow: 1;
  padding-left: 15px;
  color: ${({ theme }) => theme.primary};
  ${({ theme }) => theme.mq.laptop} {
    opacity: 1;
    padding-left: 30px;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 0.6;
    }
  }
`

const Title = styled.h2`
  font-size: 20px;
  margin: 0;
  ${({ theme }) => theme.mq.tablet} {
    font-size: 24px;
    margin: 10px 0;
  }
`

const StyledExcerpt = styled(ArticleExcerpt)`
  display: none;
  ${({ theme }) => theme.mq.tablet} {
    display: block;
  }
`

const ArticlePreviewSmall = ({ title, image, content, slug, imgName }) => {
  return (
    <Article>
      <StyledLink to={`/${slug}`}>
        <StyledImg
          imgStyle={{ objectFit: "contain" }}
          fluid={image}
          alt={imgName}
        />
        <Wrapper>
          <Title>{title}</Title>
          <StyledExcerpt content={content} length={310} />
        </Wrapper>
      </StyledLink>
    </Article>
  )
}

export default ArticlePreviewSmall
