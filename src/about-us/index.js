import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import OurStorySection from './OurStory'
import './aboutUs.css'

const AboutUsComponent = () => {
  return (
    <Segment className='aboutus-component-container'>
      <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />
      <Container>
        <OurStorySection />
        <p>
          <b>Mail us to know more on how to participate in the various programs at <i>communications.evi@ecovolunteersindia.org</i></b>
        </p>
        <h4>Let’s Conserve!</h4>
      </Container>
    </Segment>
  )
}

export default AboutUsComponent
