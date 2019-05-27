import React, { Component } from 'react'
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Button,
  Icon
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import HomepageHeading from './homepageHeading'
import CommonModal from '../components/commonModal'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'

function loginButton () {
  return (
    <Button as='a' > Log in </Button>
  )
}

function signupButton () {
  return (
    <Button as='a' primary style={{ marginLeft: '0.5em' }}> Sign Up </Button>
  )
}

export default class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item><NavLink to="/">Home</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/gallery">Gallery</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/activities">Activities</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/volunteers">Volunteers</NavLink></Menu.Item>
          <Menu.Item><NavLink to="/aboutus">About Us</NavLink></Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <CommonModal TriggerComp={loginButton()} modalHeader={'Login up'} ModalContent={LoginForm} />
                  <CommonModal TriggerComp={signupButton()} modalHeader={'Sign up'} ModalContent={SignupForm} />
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}
