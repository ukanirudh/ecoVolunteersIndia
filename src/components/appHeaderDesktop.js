import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

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
      </Container>
    </Menu>
  )
}

export default AppHeaderDesktop;
