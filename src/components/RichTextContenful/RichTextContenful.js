import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ContenfulRichTextImage from "../ContenfulRichTextImage/ContenfulRichTextImage"
import styled from "styled-components"

const Image = styled(ContenfulRichTextImage)`
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    margin-left: 20px;
    margin-right: 0;
    float: right;
    width: 300px;
    &:nth-of-type(even) {
      float: left;
      margin-right: 20px;
      margin-left: 0;
    }
  }
`

const StyledB = styled.b`
  color: ${({ theme }) => theme.primary};
`

const StyledHyperlink = styled.a`
  color: ${({ theme }) => theme.secondaryDark};
`

const Span = styled.span`
  display: block;
  text-align: center;
`

const Hyperlink = ({ children, href }) => (
  <StyledHyperlink href={href}>{children}</StyledHyperlink>
)

const Bold = ({ children }) => <StyledB>{children}</StyledB>

const TextAlignCenter = ({ children }) => <Span>{children}</Span>

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => (
      <Image contentfulId={node.data.target.sys.id} />
    ),
    [INLINES.HYPERLINK]: node => (
      <Hyperlink href={node.data.uri}>{node.content[0].value}</Hyperlink>
    ),
    [INLINES.ASSET_HYPERLINK]: node => (
      <Hyperlink href={`${node.data.target.fields.file["pl-PL"].url}`}>
        {node.content[0].value}
      </Hyperlink>
    ),
  },
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: text => <TextAlignCenter>{text}</TextAlignCenter>,
  },
}

const RichTextContenful = ({ richText }) => {
  return <>{documentToReactComponents(richText, options)}</>
}

export default RichTextContenful
