import React from 'react'
import { Segment, Container, Image, Grid } from 'semantic-ui-react'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import OurStorySection from './ourStory'
import ContactUsSection from './contactUs'
import './aboutUs.css'

const AboutUsComponent = () => {
  return (
    <Segment className='aboutus-component-container'>
      <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Image src={require(`../static/images/evi.png`)} size='medium' centered />
            </Grid.Column>
            <Grid.Column width={10}>
              <h2>Let’s Conserve!</h2>
              <OurStorySection />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <ContactUsSection />
        <p>
          <b>Mail us to know more on how to participate in the various programs at <i>communications.evi@ecovolunteersindia.org</i></b>
        </p>
      </Container>
    </Segment>
  )
}

export default AboutUsComponent
