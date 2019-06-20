import React from 'react'
import { Image, List, Segment } from 'semantic-ui-react'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import VolunteersData from '../static/data/volunteers.json'

const VolunteersList = () => {
  return (
    <Segment className='activity-component-container'>
      <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />
      <List celled>
      {
        VolunteersData.map((volunteer) => {
          const {Name, Email, Phone} = volunteer
          return (
            <List.Item>
              <Image avatar src={require(`../static/images/helen.jpg`)} />
              <List.Content verticalAlign='middle'>
                <List.Header>{Name}</List.Header>
                  <p>{Email}</p>
                  <List.Description>
                    An excellent companion.
                    {Phone}
                  </List.Description>
              </List.Content>
            </List.Item>
          )
        })
      }
      </List>
    </Segment>
  )
}

export default VolunteersList
