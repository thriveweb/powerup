import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'

import './Default.css'

const Default = ({ page, ...props }) => (
  <main className='Default' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} bannerImage={page.bannerImage} />
    <section className='section'>
      <div className='container skinny'>
        <Content source={page.content} />
      </div>
    </section>
  </main>
)
export default Default
