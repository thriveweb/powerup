import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'

import './Default.css'

const Default = ({ singlePage, ...props }) => (
  <main className='Default' data-aos='fade-up'>
    <Helmet>
      <title>{singlePage.title}</title>
    </Helmet>
    <PageHeader title={singlePage.title} bannerImage={singlePage.bannerImage} />
    <section className='section thin'>
      <div className='container skinny'>
        <Content source={singlePage.content} />
      </div>
    </section>
  </main>
)
export default Default
