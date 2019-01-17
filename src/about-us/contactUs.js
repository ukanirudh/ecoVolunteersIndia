import React from 'react'
import { Icon } from 'semantic-ui-react'

const ContactUsSection = () => {
  return (
    [
      <h3 key='0'> Contact us for more info : </h3>,
      <p key='1'><Icon name='group' /> Eco Volunteers India</p> ,
      <p key='2'><Icon name='phone' /> Phone : 9844772913 / 9620114334</p>,
      <p key='3'><Icon name='mail' /> Email : evitrust.official@gmail.com.</p>
    ]
  )
}

export default ContactUsSection
