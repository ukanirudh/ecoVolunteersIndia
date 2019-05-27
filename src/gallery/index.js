import React from 'react'
import { Segment } from 'semantic-ui-react'
import {galleryImages} from '../static/data/galleryImages'
import CardImages from './cardImages'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import MobileContainer from '../components/MobileContainer'
import DesktopContainer from '../components/DesktopContainer'
import './gallery.css'


const ResponsiveContainer = ({ children }) => (
  <React.Fragment>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </React.Fragment>
)

const GalleryComponent = () => {
  return (
    <ResponsiveContainer>
      <Segment>
        {/*<AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />*/}
        <CardImages />
      </Segment>
    </ResponsiveContainer>
  )
}

export default GalleryComponent
