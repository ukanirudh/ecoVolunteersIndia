import React from 'react'
import { Segment } from 'semantic-ui-react'
import CardImages from './cardImages'
import ResponsiveContainer from '../components/ResponsiveContainer'

const GalleryComponent = () => (
  <ResponsiveContainer>
    <Segment className='gallery-container'>
      <CardImages />
    </Segment>
  </ResponsiveContainer>
)

export default GalleryComponent;