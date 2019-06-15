import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.light};
  ${({ theme }) => theme.mq.laptop} {
    height: 140px;
  }
`

const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  font-family: ${({ theme }) => theme.font.family.second};
  ${({theme})=>theme.mq.laptop}{
    font-size: 50px;
  }
  
  
`

const Banner = () => (
  <Wrapper>
    <Title>Literatura najnowsza</Title>
  </Wrapper>
)

export default Banner
