import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Date from "../Date/Date"
import Title from "../Title/Title"
import SharedLinks from "../ShareLinks/ShareLinks"
import ArticleExcerpt from "../ArticleExcerpt/ArticleExcerpt"

const ArticleWrapper = styled.article`
  width: 100%;
  max-width: 880px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme }) => theme.mq.laptop} {
    padding-bottom: 20px;
  }
`
const StyledImg = styled(Img)`
  max-height: 550px;
  width: 100%;
  background: ${({ theme }) => theme.lightGrey};
`
const Wrapper = styled.div`
  padding: 0 10px 10px 10px;
  width: 100%;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 3px;
  position: relative;
  margin-top: -10px;
  padding: 6px 40px;
  transition-property: background-color, border;
  transition-duration: 0.5s;
  &:before {
    content: "";
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    border: 1px solid ${({ theme }) => theme.grey};
    border-radius: 3px;
  }

  &:hover {
    background: ${({ theme }) => theme.secondaryLight};
    border: 1px solid ${({ theme }) => theme.secondary};

    :before {
      border: 1px solid ${({ theme }) => theme.secondary};
    }
  }
  ${({ theme }) => theme.mq.laptop} {
    margin: 0px;
  }
`

const ArticlePreview = ({ data, intl }) => {
  return (
    <ArticleWrapper>
      <Date date={data.date} />
      <Title title={data.title} />
      <Wrapper>
        <StyledImg imgStyle={{ objectFit: "contain" }} fluid={data.image} />
        <ArticleExcerpt document={data.document} length={500} />
        <SharedLinks />
      </Wrapper>
      <StyledLink to={`/${data.slug}`}>
        {intl.formatMessage({ id: "article.read" })}
      </StyledLink>
    </ArticleWrapper>
  )
}

export default injectIntl(ArticlePreview)
