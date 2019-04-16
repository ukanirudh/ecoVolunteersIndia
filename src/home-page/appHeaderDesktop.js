import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import CommonModal from '../components/commonModal'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function loginButton (fixed) {
  return (
    <Button as='a' inverted={!fixed}> Log in </Button>
  )
}

function signupButton (fixed) {
  return (
    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}> Sign Up </Button>
  )
}

const AppHeaderDesktop = (props) => {
  const {fixed, customClassName} = props
  return (
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={fixed}
      pointing={!fixed}
      secondary={!fixed}
      size='large'
      className={`${customClassName} default-header`}
    >
      <Container>
        <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/gallery">Gallery</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/activities">Activities</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/volunteers">Volunteers</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/aboutus">About Us</NavLink></Menu.Item>
        <Menu.Item position='right'>
          <CommonModal TriggerComp={loginButton(fixed)} modalHeader={'Login up'} ModalContent={LoginForm} />
          <CommonModal TriggerComp={signupButton(fixed)} modalHeader={'Sign up'} ModalContent={SignupForm} />
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default AppHeaderDesktop;
