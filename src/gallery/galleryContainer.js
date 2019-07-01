import React from 'react'
import { Segment } from 'semantic-ui-react'
import CardImages from './cardImages'
import MobileContainer from '../components/MobileContainer'
import DesktopContainer from '../components/DesktopContainer'

const ResponsiveContainer = ({ children }) => (
  <React.Fragment>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </React.Fragment>
)

const GalleryComponent = () => (
  <ResponsiveContainer>
    <Segment>
      <CardImages />
    </Segment>
  </ResponsiveContainer>
)

export default GalleryComponent;