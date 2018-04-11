import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import BackgroundImage from '../components/BackgroundImage'
import './LocationItem.css'

const LocationItem = ({ locationItem, useTitle, ...props }) => {
  let link = false
  if (locationItem.locationLink) link = _kebabCase(locationItem.locationLink)
  if (useTitle) link = `/locations/${_kebabCase(locationItem.title)}`
  return (
    <div className='LocationItem--Item square' data-aos='fade-up'>
      <BackgroundImage
        src={locationItem.featuredThumbnail}
        className='LocationItem--Item--background'
      />
      <div className='LocationItem--Item--info square--content'>
        <h3 className='LocationItem--Item--title'>{locationItem.title}</h3>
        <p className='LocationItem--Item--subtitle'>{locationItem.subTitle}</p>
        {link && (
          <Link className='LocationItem--Item--link button' to={link}>
            Read more
          </Link>
        )}
      </div>
    </div>
  )
}
export default LocationItem
