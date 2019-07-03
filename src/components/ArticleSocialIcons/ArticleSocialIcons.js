import React from "react"
import styled from "styled-components"
import SocialIcons from "../SocialIcons/SocialIcons"

const StyledWrapper = styled.div`
  width: 100%;
  padding: 20px 0;
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
`

const ArticleSocialIcons = () => (
  <StyledWrapper>
    <SocialIcons articleicons />
  </StyledWrapper>
)

export default ArticleSocialIcons
