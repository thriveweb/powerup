import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import BackgroundImage from '../components/BackgroundImage'
import Content from '../components/Content'
// import ServicePodSection from '../components/ServicePodSection'
// import AboutSection from '../components/AboutSection'
import Buttons from '../components/Buttons'

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
      <div className='container ServicesSection--wrap'>
        <div className='TrainingPods--wrap'>
          {page.trainingPods.map((pod, index) => (
            <div
              key={index + pod.backgroundImage}
              className='TrainingPods--pod'
            >
              <BackgroundImage src={pod.backgroundImage} contain />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className='section thin welcome'>
      <div className='container Flex alignCenter justifyBettwen About-PodsGrid relative'>
        {page.pods.map((pod, index) => (
          <div key={index + pod.title} className='About-PodsGrid--pod relative'>
            <BackgroundImage src={pod.backgroundImage} />
            <h2>{pod.title}</h2>
            {pod.description}
          </div>
        ))}
      </div>
    </section>
    {/*
    {services && <ServicePodSection services={services} />}

    <section className='section nopad workoutTitle'>
      <div className='container skinny'>
        <h2 className='taCenter'>{page.workoutTitle}</h2>
      </div>
    </section>

    {page.sections && <AboutSection accordionSections={page.sections} />} */}

    {page.buttons && (
      <section className='section AboutButtons'>
        <div className='container skinny'>
          <Buttons buttons={page.buttons} className='AboutButtons--links' />
        </div>
      </section>
    )}
  </main>
)
