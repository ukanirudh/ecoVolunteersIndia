import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import AppHeaderDesktop from './appHeaderDesktop'
import HomepageHeading from './homepageHeading'
import './homePage.css'

export default class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className='responsive-primary-container'
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '0em 0em' }}
            vertical
          >
            <AppHeaderDesktop fixed={fixed} />
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}
