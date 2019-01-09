import React from 'react'
import { Image, Button, Container, Header, Icon } from 'semantic-ui-react'
import './homePage.css'

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image src={require(`../static/images/evi.png`)} size='medium' centered />
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
      content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button>
  </Container>
)

export default HomepageHeading;
