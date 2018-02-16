import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Copyright from '../components/Copyright'
import Panel from '../components/Panel'

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

const Inner = styled.div`
  position: relative
`

const Logo = styled.div`
  position: absolute;
  display: block;
  font-size: 48px;
  font-family: cursive;
  width: 400px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  top: -84px;
  user-select: none;
`

const Form = styled.form`
  position: relative;
`

const InnerPanel = Panel.extend`
  padding: 24px 36px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  width: 200px;
`

const Field = styled.span`
  font-weight: bold;
  font-size: 12px;
  line-height: 2;
  user-select: none;
`

const Input = styled.input`
  display: block;
  line-height: 30px;
  width: 100%;
  border: 1px solid #EEE;
  padding: 0 12px;

  &:focus {
    border: 1px solid #EEE;
    border-left: 4px solid #ffd700;
    outline: none;
    padding-left: 8px;
  }
`

class LoginPage extends Component {
  render () {
    return (
      <Wrapper>
        <Inner>
          <Logo>Drawing as Saying</Logo>
          <Form>
            <InnerPanel>
              <Label>
                <Field>Name</Field>
                <Input type="text" />
              </Label>
              <Label>
                <Field>Password</Field>
                <Input type="password" />
              </Label>
            </InnerPanel>
            <Button>Login</Button>
          </Form>
        </Inner>
        <Copyright />
      </Wrapper>
    )
  }
}

export default LoginPage
