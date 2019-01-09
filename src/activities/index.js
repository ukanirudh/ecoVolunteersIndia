import React, {Component} from 'react'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import RegisterForActivity from './registerForActivity'
import { Image, List, Segment, Button, Icon } from 'semantic-ui-react'
import {activitiesList} from '../static/data/activitiesList'
import './activities.css'

const renderActivitiesList = (activities, showRegisterModal) => {
  const activitiesList = activities.map((activity) => {
    const {activity_id: actId, activity_date: date, activity_name: name, number_of_paricipants_required: noOfParticipants} = activity
    return (
      <List.Item key={actId} className='activity-list-item'>
        <List.Content floated='right'>
          <Button onClick={showRegisterModal}>Register</Button>
        </List.Content>
        <List.Content>
          <List.Header as='a'>{name}</List.Header>
          <List.Description>
          <div>
          <p>
            <span><Icon name='calendar alternate outline' />{date}</span>
            <span><Icon name='child' />{noOfParticipants}</span>
          </p>
          <p>
            <span><b>Activity and Responsibilities: </b></span>
            Crowd Management Support to Karnataka Forest Department , Bandipur Tiger Reserve.
          </p>
          </div>
          </List.Description>
        </List.Content>
      </List.Item>
    )
  })
  return activitiesList
}

class Activities extends Component {

  componentWillMount () {
    this.setState({showModal: false})
  }

  showRegisterModal = () => {
    this.setState({showModal: true})
  }

  render () {
    const {showModal} = this.state
    return (
      <Segment className='activity-component-container'>
        <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />
        <RegisterForActivity openRegisterModal={showModal} />
        <List className='activity-list-container'>
          {renderActivitiesList(activitiesList, this.showRegisterModal)}
        </List>
      </Segment>
    )
  }
}

export default Activities
