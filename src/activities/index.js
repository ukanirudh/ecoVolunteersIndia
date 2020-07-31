import React, {Suspense} from 'react'
import './activities.scss'

const LazyActivitiesComponent = React.lazy(() => import('./activitiesContainer'));
const AsyncActivitiesComponent = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyActivitiesComponent />
      </Suspense>
    </React.Fragment>
  )
}

export default AsyncActivitiesComponent
