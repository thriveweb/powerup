import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import LazyImage from './LazyImage'
import './LocationCard.css'

export default class LocationCard extends React.Component {
  render () {
    const { projectItem } = this.props
    return (
      <Link
        to={`/projects/${_kebabCase(projectItem.title)}/`}
        className='LocationCard'
      >
        {projectItem.projectFeaturedImage && (
          <div className='LocationCard--Image'>
            <LazyImage
              src={projectItem.projectFeaturedImage}
              alt={projectItem.title}
            />
          </div>
        )}
        {projectItem.title && (
          <h3 className='LocationCard--Title'>{projectItem.title}</h3>
        )}
        <div className='button'>See more</div>
      </Link>
    )
  }
}
