import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import LocationItem from '../components/LocationItem'
import './Locations.css'

const Locations = ({ page, ...props }) => {
  return (
    <main className='Location' data-aos='fade-up'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>
      <PageHeader title={page.title} bannerImage={page.bannerImage} />
      <section className='section'>
        <div className='container'>
          {page.subtitle && (
            <h2 className='Locations--title'>{page.subtitle}</h2>
          )}
          {page.thumbnailLocations && (
            <div className='Locations--Grid'>
              {page.thumbnailLocations.map((locationItem, index) => (
                <LocationItem key={index} locationItem={locationItem} />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
export default Locations
