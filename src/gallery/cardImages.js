import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import {galleryImages} from '../static/data/galleryImages'

const CardImages = () => {
  const renderedImageCard = galleryImages.map((gImage) => {
    return (
      <Card key={gImage.imageUrl}>
        <Image src={require(`../static/images/${gImage.imageUrl}`)} />
        <Card.Content>
          <Card.Header>Daniel</Card.Header>
          <Card.Meta>Joined in 2016</Card.Meta>
          <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            10 Friends
          </a>
        </Card.Content>
      </Card>
    )
  })

  return (
    <Card.Group>
      {renderedImageCard}
    </Card.Group>
  )
}

export default CardImages
