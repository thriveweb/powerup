import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import BackgroundImage from '../components/BackgroundImage'
import './LocationItem.css'

const LocationItem = ({ locationItem, ...props }) => {
  return (
    <div className='LocationItem--Item square' data-aos='fade-up'>
      {console.log(locationItem)}
      <BackgroundImage
        src={locationItem.featuredThumbnail}
        className='LocationItem--Item--background'
      />
      <div className='LocationItem--Item--info square--content'>
        <h3 className='LocationItem--Item--title'>{locationItem.title}</h3>
        <p className='LocationItem--Item--subtitle'>{locationItem.subTitle}</p>
        {locationItem.locationLink && (
          <Link
            className='LocationItem--Item--link button'
            to={_kebabCase(locationItem.locationLink)}
          >
            Read more
          </Link>
        )}
      </div>
    </div>
  )
}
export default LocationItem
