import styled from "styled-components"

export const MainContainer = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  background: ${({ theme }) => theme.bright};
  ${({ theme }) => theme.mq.laptop} {
    padding-left: 80px;
  }
`

export const MainWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 880px;
  position: relative;
  padding: 0 0 70px 0;
`
