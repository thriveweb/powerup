import React from 'react'

import '../src/globalStyles.css'
import data from '../src/data.json'
import Home from '../src/views/Home'
import About from '../src/views/About'
import Locations from '../src/views/Locations'
import SingleLocation from '../src/views/SingleLocation'
import Contact from '../src/views/Contact'
import Default from '../src/views/Default'
import Faq from '../src/views/Faq'

const CMS = window.CMS
CMS.registerPreviewStyle(
  'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css'
)
CMS.registerPreviewStyle('/admin/cms.bundle.css')

const getDocuments = collection => data[collection]

const getDocument = (collection, name) =>
  data[collection] && data[collection].filter(page => page.name === name)[0]
const globalSettings = getDocument('settings', 'global')

// Preview Templates
CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <Home
    page={entry.toJS().data}
    locations={getDocument('pages', 'locations')}
    services={getDocuments('services')}
  />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <About page={entry.toJS().data} services={getDocuments('services')} />
))
CMS.registerPreviewTemplate('locations-page', ({ entry }) => (
  <Locations page={entry.toJS().data} />
))
CMS.registerPreviewTemplate('locations', ({ entry }) => (
  <SingleLocation singleLocation={entry.toJS().data} />
))
// CMS.registerPreviewTemplate('posts', ({ entry }) => (
//   <SinglePost singlePost={entry.toJS().data} />
// ))

window.netlifyIdentity.on('logout', function () {
  document.location.href = '/'
})
