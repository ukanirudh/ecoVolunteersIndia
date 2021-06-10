import React from 'react'
import { Image, Container, Header } from 'semantic-ui-react'
import Evi2 from '../static/images/evi_2.png'
import './homePage.css'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image src={Evi2} size='medium' centered />
    <Header
      as='h1'
      content='Eco Volunteers India'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0
      }}
    />
    <Header
      as='h2'
      content='Wildlife conservation || Animal Rescue || Intelligence || Forest Patrolling || Awareness || Nature camps || Crowd management || Anti snare and Anti poaching activity || Traffic management.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    {/*<Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>*/}
  </Container>
)

export default HomepageHeading;
