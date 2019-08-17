import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Date from "../Date/Date"
import Title from "../Title/Title"
import SharedLinks from "../ShareLinks/ShareLinks"

const Wrapper = styled.div`
  width: 100%;
  max-width: 880px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledImg = styled(Img)`
  max-height: 550px;
  width: 95%;
  background: ${({ theme }) => theme.lightGrey};
`
const TextWrapper = styled.div`
  padding: 10px;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryLight};
  border: 1px solid ${({ theme }) => theme.grey};
  border-radius: 3px;
  position: relative;
  padding: 6px 40px;
  transition-property: background, border;
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
`
// FIXME: style article-prewiew  exerpt is not working as expected. It renders only first node.Its stops rendering if italic mark in paragraph node
const ArticlePreview = ({ data, intl }) => {
  return (
    <Wrapper>
      <Date date={data.date} />
      <Title title={data.title} />
      <StyledImg imgStyle={{ objectFit: "contain" }} fluid={data.image} />
      <TextWrapper>
        <p>{data.exerpt}</p>
        <SharedLinks />
      </TextWrapper>
      <StyledLink to={`/${data.slug}`}>
        {intl.formatMessage({ id: "article.read" })}
      </StyledLink>
    </Wrapper>
  )
}

export default injectIntl(ArticlePreview)
