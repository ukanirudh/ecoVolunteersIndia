import React from 'react'
import { Image, Container, Header } from 'semantic-ui-react'
import Evi2 from '../static/images/evi_2.png'
import './homePage.css'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image src={Evi2} size='small' centered />
    <Header
      as='h1'
      content='Eco Volunteers India'
      inverted
    />
    <Header
      as='h3'
      content='Wildlife conservation || Animal Rescue || Intelligence || Forest Patrolling || Awareness || Nature camps || Crowd management || Anti snare and Anti poaching activity || Traffic management.'
      inverted
    />
    {/*<Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>*/}
  </Container>
)

export default HomepageHeading;
