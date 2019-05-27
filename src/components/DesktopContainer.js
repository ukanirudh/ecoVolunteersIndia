import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Button,
  Container,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import HomepageHeading from '../home-page/homepageHeading'
import '../home-page/homePage.css'

export default class DesktopContainer extends Component {
  state = {}

  constructor (props) {
    super(props)
    const {shouldShowHeading} = props
    this.headerClass=`responsive-primary-container`
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, shouldShowHeading = false } = this.props
    const { fixed } = this.state
    console.log(this.headerClass)
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className={''}
            inverted
            textAlign='center'
            style={ shouldShowHeading ? { minHeight: 700, padding: '1em 0em' } : {}}
            vertical
          >
            <AppHeaderDesktop fixed={fixed} />
            {shouldShowHeading && <HomepageHeading />}
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}