import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Bar = styled.div`
  width: 100%;
  // background: ${({ theme }) => theme.light};
  background: linear-gradient(0deg, white 65%, ${({theme})=>theme.light} 35%);
  display: flex;
  justify-content: center;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 650px;
  border: 12px solid #ffffff;
`

const Hero = ({ data }) => (
  <Bar>
    <ImageWrapper>
      <Img fluid={data.file.childImageSharp.fluid} />
    </ImageWrapper>
  </Bar>
)

export default Hero
