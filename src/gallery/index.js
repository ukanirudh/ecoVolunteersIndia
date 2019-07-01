import React, {Suspense} from 'react'

const LazyGalleryComponent = React.lazy(() => import('./galleryContainer'));
const AsyncGalleryComponent = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyGalleryComponent />
      </Suspense>
    </React.Fragment>
  )
}

export default AsyncGalleryComponent