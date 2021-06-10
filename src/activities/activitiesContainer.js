import React, {useEffect} from 'react'
import ResponsiveContainer from '../components/ResponsiveContainer'
import SingleActivity from './SingleActivity'
import {List, Segment, Grid} from 'semantic-ui-react'
import {activitiesList} from '../static/data/activitiesList'
// import { eventRegisterDispatch } from '../store/modules/eventsModules'
import { useSelector, useDispatch } from 'react-redux';

const renderActivitiesList = (activities, showRegisterModal, props) => {
  const activitiesList = activities.map(
    (activity) => <SingleActivity key={activity.activity_id} activity={activity} {...props}/>
  )
  return activitiesList
}

const ActivitiesContainer = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    // dispatch(eventRegisterDispatch());
  }, [])
  
  return (
    <ResponsiveContainer>
      <Segment className='activity-component-container'>
        <Grid centered columns={8}>
          <Grid.Row columns={16}>
            <List divided relaxed className='activity-list-container'>
              {renderActivitiesList(activitiesList, false, {})}
            </List>
          </Grid.Row>
        </Grid>
      </Segment>
    </ResponsiveContainer>
  )
}

export default ActivitiesContainer;
