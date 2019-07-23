import React from "react"
import styled from "styled-components"
import LatestArticles from '../LatestArticles/LatestArticles'

const StyledSidebar = styled.div`
  background: #dadada;
  width: 320px;

  display: none;
  ${({ theme }) => theme.mq.laptop} {
    display: initial;
  }
`

const Sidebar = () => <StyledSidebar><LatestArticles/></StyledSidebar>
export default Sidebar
