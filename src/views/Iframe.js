import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'

import './Iframe.css'

const Iframe = ({ page, ...props }) => (
  <main className='Iframe' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} bannerImage={page.bannerImage} />
    <section className='section thin'>
      <div className='container'>
        <div className='embeded'>{page.iframe}</div>
      </div>
    </section>
  </main>
)
export default Iframe
