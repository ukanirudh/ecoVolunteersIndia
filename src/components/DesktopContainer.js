import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import AppHeaderDesktop from './appHeaderDesktop'
import HomepageHeading from '../home-page/homepageHeading'
import Footer from './AppFooter'
import '../home-page/homePage.css'

export default class DesktopContainer extends Component {
  state = {}

  constructor (props) {
    super(props)
    this.headerClass=`responsive-primary-container`
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, shouldShowHeading = false } = this.props
    const { fixed } = this.state
    
    return (
      <>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className={''}
            inverted
            textAlign='center'
            style={ shouldShowHeading ? { height: 400, padding: '0em 0em' } : {padding: '0em 0em'}}
            vertical
          >
            <AppHeaderDesktop fixed={fixed} />
            {shouldShowHeading && <HomepageHeading />}
          </Segment>
        </Visibility>

        {children}
        <Footer />
      </>
    )
  }
}
