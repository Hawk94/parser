import React, {Component} from 'react'
import styled from 'styled-components'
import {Button} from 'theme/globalStyle'

export const StyledApp = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 100px;
  background-color: #eff1f5;
`

const StyledBody = styled.div`
  width: 620px;
  height: 570px;
  border-radius: 3px;
  background-color: #ffffff;
  flex-direction: column;
  box-sizing: border-box;
`

const StyledContent = styled.div``

const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export class App extends Component {
  state = {
    tabIndex: 0
  }

  changeTab = tabIndex => {
    this.setState({tabIndex})
  }

  render() {
    const {tabIndex} = this.state
    return (
      <StyledApp>
        <StyledBody>
          <NavBar>
            <Button
              onClick={() => this.changeTab(0)}
              isActive={tabIndex === 0 ? true : false}
            >
              Input
            </Button>
            <Button
              onClick={() => this.changeTab(1)}
              isActive={tabIndex === 1 ? true : false}
            >
              Mapping
            </Button>
            <Button
              onClick={() => this.changeTab(2)}
              isActive={tabIndex === 2 ? true : false}
            >
              Output
            </Button>
          </NavBar>
          {tabIndex === 0 && <StyledContent>This is tab 1</StyledContent>}
          {tabIndex === 1 && <StyledContent>This is tab 2</StyledContent>}
          {tabIndex === 2 && <StyledContent>This is tab 3</StyledContent>}
        </StyledBody>
      </StyledApp>
    )
  }
}
