import React from 'react'
import { Card, Icon, Image, Segment } from 'semantic-ui-react'
import {galleryImages} from '../static/data/galleryImages'
import CardImages from './cardImages'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'

const GalleryComponent = () => {
  return (
    <Segment>
      <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />
      <CardImages />
    </Segment>
  )
}

export default GalleryComponent
