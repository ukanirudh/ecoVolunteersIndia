import React, {Suspense} from 'react'
import ActivitiesContainer from './activitiesContainer'
import './activities.scss'

const AsyncActivitiesComponent = () => {
  return (
    <React.Fragment>
      <ActivitiesContainer />
    </React.Fragment>
  )
}

export default AsyncActivitiesComponent
