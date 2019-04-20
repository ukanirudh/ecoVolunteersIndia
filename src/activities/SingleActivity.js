import React from 'react'
import RegisterForActivity from './registerForActivity'
import { List, Segment, Button, Icon } from 'semantic-ui-react'
import CommonModal from '../components/commonModal'

const SingleActivity = (props) => {
  const {activity} = props
  const {
    activity_id: actId,
    activity_date: date,
    activity_name: name,
    number_of_paricipants_required: noOfParticipants,
    activity_desc: actDesc
  } = activity

  return (
    <List.Item key={actId} className='activity-list-item'>
      <List.Content floated='right'>
        <CommonModal TriggerComp={<Button>Register</Button>} modalHeader={'Register'} ModalContent={RegisterForActivity} />
      </List.Content>
      <List.Content style={{textAlign: 'initial'}}>
        <List.Header as='a'>{name}</List.Header>
        <List.Description>
        <div>
        <p>
          <span><Icon name='calendar alternate outline' />{date}</span>
          <span><Icon name='child' />{noOfParticipants}</span>
        </p>
        <p>
          <span><b>Activity and Responsibilities: </b></span> {actDesc}
        </p>
        </div>
        </List.Description>
      </List.Content>
    </List.Item>
  )
}

export default SingleActivity;
