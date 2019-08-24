import React from "react"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import truncate from "lodash/truncate"

const ArticleExcerpt = ({ document, length }) => {
  return (
    <p>{truncate(documentToPlainTextString(document), { length: length })}</p>
  )
}

export default ArticleExcerpt
