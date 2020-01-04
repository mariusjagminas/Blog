import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 840px;

  margin: 0 auto;
  ${({ theme }) => theme.mq.laptop} {
    margin-bottom: 25px;
  }
`

const StyledImg = styled(Img)`
  border: 12px solid ${({ theme }) => theme.bright};
`

const Hero = ({ data }) => (
  <ImageWrapper>
    <StyledImg
      fluid={data.file.childImageSharp.fluid}
      alt={"main hero image"}
    />
  </ImageWrapper>
)

export default Hero
