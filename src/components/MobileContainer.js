import React, { useState } from 'react'
import {
  Container,
  Menu,
  Segment,
  Sidebar,
  Button,
  Icon
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import HomepageHeading from '../home-page/homepageHeading'
import Footer from './AppFooter'

const MobileContainer = (props) => {
  const { children, shouldShowHeading = false } = props;
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const handleSidebarHide = () => setSidebarOpened(false)

  const handleToggle = () => setSidebarOpened(true)

  return (
    <Segment as={Sidebar.Pushable}>
      <Sidebar
        as={Menu}
        animation='push'
        inverted
        onHide={handleSidebarHide}
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
              <Menu.Item onClick={handleToggle}>
                <Icon name='sidebar' />
              </Menu.Item>
            </Menu>
          </Container>
          {shouldShowHeading && <HomepageHeading mobile />}
        </Segment>

        {children}
        <Footer />
      </Sidebar.Pusher>
    </Segment>
  )
}

export default MobileContainer;