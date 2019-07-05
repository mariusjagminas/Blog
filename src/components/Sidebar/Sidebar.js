import React from "react"
import styled from "styled-components"

const StyledSidebar = styled.div`
  border: 1px solid red;
  width: 400px;
  display: none;
  ${({theme})=>theme.mq.laptop}{
    display: initial;
  }
`

const Sidebar = () => <StyledSidebar>Hello from sidebar</StyledSidebar>
export default Sidebar
