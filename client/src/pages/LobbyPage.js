import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Copyright from '../components/Copyright'
import BasePanel from '../components/Panel'

const Wrapper = styled.div`
  display: flex;
  width: 600px;
  height: 100%;
  flex-direction: column;
  margin: auto;
`

const Title = styled.div`
  font-family: cursive;
  font-size: 36px;
  line-height: 2;
`

const Panel = BasePanel.extend`
  padding: 26px;
  height: 80vh;
`

const Rooms = styled.ul`
  margin: 0;
  padding: 0;
`

const Room = styled.li`
  display: flex;
  list-style: none;
  border: 1px solid #aaa;
  justify-content: space-between;
`

const Name = styled.span`
`

class LobbyPage extends Component {
  render () {
    return (
      <Wrapper>
        <Title>Join a Room</Title>
        <Panel>
          <Rooms>
            <Room><Name>Can Lin</Name><Button>Join</Button></Room>
            <Room>1</Room>
          </Rooms>
        </Panel>
      </Wrapper>
    )
  }
}

export default LobbyPage
