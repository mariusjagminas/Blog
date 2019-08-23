import React from "react"
import styled from "styled-components"
import LatestArticles from "../LatestArticles/LatestArticles"
import Archive from "../Archive/Archive"

const StyledSidebar = styled.aside`
  width: 320px;
  margin-left: 14px;
  padding: 40px 20px;
  display: none;
  ${({ theme }) => theme.mq.laptop} {
    display: initial;
  }
`

const Sidebar = () => (
  <StyledSidebar>
    <LatestArticles />
    <Archive />
  </StyledSidebar>
)
export default Sidebar
