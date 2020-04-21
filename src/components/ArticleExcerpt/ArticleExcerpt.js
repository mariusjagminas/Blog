import React from "react"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import truncate from "lodash/truncate"
import styled from "styled-components"

const StyledQuote = styled.blockquote`
  margin: 0;
  text-align: justify;
`
const ArticleExcerpt = ({ content, length, ...props }) => {
  return (
    <StyledQuote {...props}>
      {truncate(documentToPlainTextString(content), { length: length })}
    </StyledQuote>
  )
}

export default ArticleExcerpt
