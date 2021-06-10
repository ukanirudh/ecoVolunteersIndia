import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {galleryImages} from '../static/data/galleryImages'

const CardImages = () => {
  const renderedImageCard = galleryImages.map((gImage) => {
    const {imageUrl, activityName, activityDesc, activityDate, numParticipants} = gImage
    return (
      <Card key={imageUrl}>
        <div className='gallery-card-img-container'>
          <Image style={{height: '100%', width: '100%'}} src={require(`../static/images/${imageUrl}`).default} />
        </div>
        <Card.Content>
          <Card.Header>{activityName}</Card.Header>
          <Card.Meta>{activityDate}</Card.Meta>
          <Card.Description>{activityDesc}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a> <Icon name='user' /> {numParticipants} Partcipants </a>
        </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group className='gallery-container' itemsPerRow={3}>
      {renderedImageCard}
    </Card.Group>
  )
}

export default CardImages
