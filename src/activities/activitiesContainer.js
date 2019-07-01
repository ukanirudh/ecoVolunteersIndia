import React, {Component} from 'react'
import AppHeaderDesktop from '../home-page/appHeaderDesktop'
import SingleActivity from './SingleActivity'
import {List, Segment, Grid} from 'semantic-ui-react'
import {activitiesList} from '../static/data/activitiesList'

const renderActivitiesList = (activities, showRegisterModal) => {
  const activitiesList = activities.map((activity) => <SingleActivity activity={activity} />)
  return activitiesList
}

class ActivitiesContainer extends Component {
  render () {
    return (
      <Segment className='activity-component-container'>
        <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} />
        <Grid centered columns={8}>
          <Grid.Row columns={16}>
            <List divided relaxed className='activity-list-container'>
              {renderActivitiesList(activitiesList, this.showRegisterModal)}
            </List>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default ActivitiesContainer
