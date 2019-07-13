import React from "react"
import MainTemplate from "../templates/MainTemplate/MainTemplate"
import Title from "../components/Title/Title"
import styled from "styled-components"

const Wrapper = styled.div`
  max-width: 1360px;
  height: calc(100vh - 228px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bright};
`

export default () => (
  <MainTemplate>
    <Wrapper>
      <Title title={`404 page does't exist`} />
    </Wrapper>
  </MainTemplate>
)
