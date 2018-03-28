import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import LocationSection from '../components/LocationSection'
import './Locations.css'

export default ({ page, locations }) => (
  <main className='Location' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} />
    <LocationSection locations={locations} />
  </main>
)
