import React from "react"
import styled from "styled-components"
import Menu from "../Menu/Menu"
import { format } from "date-fns"

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.primaryLight};
`

const Copyright = styled.p`
  color: ${({ theme }) => theme.bright};
  text-align: center;
  padding: 30px 0;
  margin: 0;
  width: 100%;
  box-shadow: 0px 4px 8px 0px rgba(255, 255, 255, 0.59);
`

class Footer extends React.Component {
  state = {
    year: "2019",
  }

  componentDidMount() {
    this.setState({ year: format(new Date(), "yyyy") })
  }

  render() {
    return (
      <Wrapper>
        <Menu infooter="true" />
        <Copyright>&copy;{`${this.state.year} Pawel Hładki`} </Copyright>
      </Wrapper>
    )
  }
}

export default Footer
