import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

const AppHeaderDesktop = (props) => {
  const {fixed, customClassName} = props
  return (
    <Menu
      fixed={fixed ? 'top' : null}
      inverted={!fixed}
      pointing={!fixed}
      secondary={!fixed}
      size='large'
      className={customClassName}
    >
      <Container>
        <Menu.Item as='a' active>Home</Menu.Item>
        <Menu.Item><NavLink to="/gallery">Gallery</NavLink></Menu.Item>
        <Menu.Item><NavLink to="/activities">Activities</NavLink></Menu.Item>
        <Menu.Item as='a'>Volunteers</Menu.Item>
        <Menu.Item><NavLink to="/aboutus">About Us</NavLink></Menu.Item>
        <Menu.Item position='right'>
          <Button as='a' inverted={!fixed}> Log in </Button>
          <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}> Sign Up </Button>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default AppHeaderDesktop;
