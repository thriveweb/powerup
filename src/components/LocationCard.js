import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import LazyImage from './LazyImage'
import './LocationCard.css'

export default class LocationCard extends React.Component {
  render () {
    const { locations } = this.props
    return (
      <Link
        to={`/projects/${_kebabCase(locations.title)}/`}
        className='LocationCard'
      >
        {locations.projectFeaturedImage && (
          <div className='LocationCard--Image'>
            <LazyImage
              src={locations.projectFeaturedImage}
              alt={locations.title}
            />
          </div>
        )}
        {locations.title && (
          <h3 className='LocationCard--Title'>{locations.title}</h3>
        )}
        <div className='button'>See more</div>
      </Link>
    )
  }
}
