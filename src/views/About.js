import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import BackgroundImage from '../components/BackgroundImage'
import Content from '../components/Content.js'
import ServicePodSection from '../components/ServicePodSection'
import AboutSection from '../components/AboutSection'

import './About.css'

export default ({ page, services }) => (
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
          <BackgroundImage src={page.welcomeImage} contain='contain' lazy />
        </div>
      </div>
    </section>

    {services && <ServicePodSection services={services} />}

    <section className='section nopad workoutTitle'>
      <div className='container skinny'>
        <h2 className='taCenter'>{page.workoutTitle}</h2>
      </div>
    </section>

    {page.sections && <AboutSection accordionSections={page.sections} />}
  </main>
)
