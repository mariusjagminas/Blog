import React from "react"
import styled, { withTheme, css } from "styled-components"
import { FacebookShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, TwitterIcon } from "react-share"

const Wrapper = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before,
  &:after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.grey};
  }
  ${({ theme }) => theme.mq.laptop} {
    padding: 15px 0;
  }
`

const IconsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
`
const sharedStyle = css`
  transition: opacity 0.2s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`

const FacebookButton = styled(FacebookShareButton)`
  ${sharedStyle}
`
const TwitterButton = styled(TwitterShareButton)`
  ${sharedStyle}
`

const ShareLinks = ({ theme }) => {
  return (
    <Wrapper>
      <IconsWrapper>
        <FacebookButton url={"https://gallant-kare-5fe476.netlify.com/"}>
          <FacebookIcon
            size={30}
            round={true}
            iconBgStyle={{ fill: `${theme.secondary}` }}
          />
        </FacebookButton>
        <TwitterButton url={"https://gallant-kare-5fe476.netlify.com/"}>
          <TwitterIcon
            size={30}
            round={true}
            iconBgStyle={{ fill: `${theme.secondary}` }}
          />
        </TwitterButton>
      </IconsWrapper>
    </Wrapper>
  )
}

export default withTheme(ShareLinks)
