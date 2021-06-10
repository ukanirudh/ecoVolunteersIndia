import React, {Suspense} from 'react'
import GalleryContainer  from './galleryContainer'
// const LazyGalleryComponent = React.lazy(() => import('./galleryContainer'));
import './gallery.scss'

const AsyncGalleryComponent = () => {
  return (
    <React.Fragment>
        <GalleryContainer />
    </React.Fragment>
  )
}

export default AsyncGalleryComponent