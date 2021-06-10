import React, {useEffect, useState} from 'react'
import { Image, List, Segment } from 'semantic-ui-react'
import ResponsiveContainer from '../components/ResponsiveContainer'
import { useSelector, useDispatch } from 'react-redux';
import { getVolunteers } from '../store/modules/volunteersModules'
import Helen from '../static/images/helen.jpg';

const VolunteersList = () => {
  const [volunteersList, setVolunteersList] = useState([]);
  const volunteersModules = useSelector((state) => state.volunteersModules);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVolunteers())
  }, [])

  useEffect(() => {
    setVolunteersList(volunteersModules.volunteers)
  }, [volunteersModules.volunteers])

  return (
    <ResponsiveContainer>
      <Segment className='activity-component-container'>
        <List celled>
        {
          volunteersList.map((volunteer, index) => {
            const {volunteerName, email, phoneNumber, occupation, bio} = volunteer
            return (
              <List.Item key={`${volunteerName}-${index}`}>
                <Image avatar src={Helen} />
                <List.Content verticalAlign='middle'>
                  <List.Header>{volunteerName}</List.Header>
                    <List.Description>
                      {email && <p>{email}</p>}
                      {bio && <p>{bio}.</p>}
                      {phoneNumber && <p>{phoneNumber}</p>}
                    </List.Description>
                </List.Content>
              </List.Item>
            )
          })
        }
        </List>
      </Segment>
    </ResponsiveContainer>
  )
}

export default VolunteersList;
