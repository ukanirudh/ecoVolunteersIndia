import React, {Component} from 'react'
import ResponsiveContainer from '../components/ResponsiveContainer'
import SingleActivity from './SingleActivity'
import {List, Segment, Grid} from 'semantic-ui-react'
import {activitiesList} from '../static/data/activitiesList'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { eventRegisterDispatch } from '../store/modules/eventsModules'

const renderActivitiesList = (activities, showRegisterModal, props) => {
  const activitiesList = activities.map((activity) => <SingleActivity activity={activity} {...props} />)
  return activitiesList
}

class ActivitiesContainer extends Component {
  render () {
    this.props.actions.eventRegisterDispatch({})
    return (
      <Segment className='activity-component-container'>
        <ResponsiveContainer>
          {/* <AppHeaderDesktop fixed={false} customClassName={'others-appHeader'} /> */}
          <Grid centered columns={8}>
            <Grid.Row columns={16}>
              <List divided relaxed className='activity-list-container'>
                {renderActivitiesList(activitiesList, this.showRegisterModal, this.props)}
              </List>
            </Grid.Row>
          </Grid>
        </ResponsiveContainer>
      </Segment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  const actions = bindActionCreators(Object.assign({}, {
    eventRegisterDispatch
  }), dispatch)
  return {actions, dispatch}
}

function mapStateToProps ({eventsModules}) {
  return { eventsModules }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivitiesContainer)
