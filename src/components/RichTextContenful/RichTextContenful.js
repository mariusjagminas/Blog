import React from "react"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ContentfulImage from "../../assets/helpers/ContentfulImage"
import styled from "styled-components"

const ImageWrapper = styled.div`
  width: 250px;
  float: right;
  margin-right: 20px;

  &:nth-of-type(even) {
    float: left;
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

const RichTextContenful = ({ richText }) => {
  return <>{documentToReactComponents(richText, options)}</>
}

export default RichTextContenful
