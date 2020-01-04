import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { injectIntl } from "gatsby-plugin-intl"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  ${({ theme }) => theme.mq.tablet} {
    flex-direction: row;
  }
`
const TitleWrapper = styled.div`
  margin: 20px auto 0 auto;
`
const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.font.size.xl};
`
const Subtitle = styled.p`
  display: ${({ locale }) => (locale === "fr" ? "inherit" : "none")};
`

const ImgWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin-top: 20px;
`
const HeaderAboutMe = ({ intl, intl: { locale } }) => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{intl.formatMessage({ id: "aboutMe.title" })}</Title>
        <Subtitle locale={locale}>docteur en littérature comparée</Subtitle>
      </TitleWrapper>
      <ImgWrapper>
        <Img fluid={data.file.childImageSharp.fluid} alt={"Pawel Hladki"} />
      </ImgWrapper>
    </Wrapper>
  )
}

export default injectIntl(HeaderAboutMe)

const query = graphql`
  query HeaderAboutMe {
    file(relativePath: { eq: "pawel-hladki.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  }
`
