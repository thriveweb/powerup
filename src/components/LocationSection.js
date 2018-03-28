import React from 'react'
import _sortBy from 'lodash/sortBy'

import LocationCard from '../components/LocationCard'
import './LocationSection.css'

const LocationSection = ({
  locations = [],
  title,
  limit = 9999,
  className = '',
  ...props
}) => (
  <div className={`section thin LocationSection ${className}`} {...props}>
    <div className='container'>
      {title && (
        <h2 className='taCenter' data-aos='fade-down'>
          {title}
        </h2>
      )}
      {locations.length && (
        <div
          className='Flex alignCenter justifyBetween flexWrap'
          data-aos='fade-up'
        >
          {_sortBy(locations, ['order'])
            .slice(0, limit)
            .map((locationItem, index) => (
              <LocationCard
                key={locationItem.title + index}
                locationItem={locationItem}
              />
            ))}
        </div>
      )}
    </div>
  </div>
)

export default LocationSection
