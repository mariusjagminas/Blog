import React from "react"
import styled from "styled-components"

const StyledSidebar = styled.div`
  background: #dadada;
  width: 320px;

  display: none;
  ${({ theme }) => theme.mq.laptop} {
    display: initial;
  }
`

const Sidebar = () => <StyledSidebar></StyledSidebar>
export default Sidebar
