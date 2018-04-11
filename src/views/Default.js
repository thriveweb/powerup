import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'

import './Default.css'

const Default = ({ singlePage, ...props }) => (
  <main className='Default' data-aos='fade-up'>
    <Helmet>
      <title>{singlePage.title}</title>
    </Helmet>
    <PageHeader title={singlePage.title} bannerImage={singlePage.bannerImage} />
    <section className='section thin'>
      <div className='container'>{singlePage.content}</div>
    </section>
  </main>
)
export default Default
