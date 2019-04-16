import React from 'react'
import { Segment, Container } from 'semantic-ui-react'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import OurStorySection from './ourStory'
import ContactUsSection from './contactUs'
import './aboutUs.css'

const AboutUsComponent = () => {
  return (
    <Segment className='aboutus-component-container'>
      <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />
      <Container>
        <h2>Let’s Conserve!</h2>
        <OurStorySection />
        <ContactUsSection />
        <p>
          <b>Mail us to know more on how to participate in the various programs at <i>communications.evi@ecovolunteersindia.org</i></b>
        </p>
      </Container>
    </Segment>
  )
}

export default AboutUsComponent
