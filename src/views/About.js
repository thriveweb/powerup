import React from 'react'
import Helmet from 'react-helmet'
import _sortBy from 'lodash/sortBy'

import PageHeader from '../components/PageHeader'
import BackgroundImage from '../components/BackgroundImage'
import Content from '../components/Content.js'
import ServicePodSection from '../components/ServicePodSection'
import StaffMemberCard from '../components/StaffMemberCard'

import './About.css'

export default ({ page, staff, services }) => (
  <main className='About' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} bannerImage={page.bannerImage} />
    <section className='section thin welcome'>
      <div className='container Flex alignCenter justifyBettwen'>
        <div className='welcome--info'>
          <h2 className='welcome-title'>{page.welcomeTitle}</h2>
          <blockquote>
            <Content source={page.welcomeQuote} />
          </blockquote>
          <div className='welcome--content'>
            <Content source={page.welcomeSection} />
          </div>
        </div>
        <div className='welcome--image'>
          <BackgroundImage src={page.featuredImage} contain lazy />
        </div>
      </div>
    </section>

    {services && <ServicePodSection services={services} />}
  </main>
)
