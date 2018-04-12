import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import LazyImage from '../components/LazyImage'

import ServicePodSection from '../components/ServicePodSection'
import TestimonialsSection from '../components/TestimonialsSection'

import './Home.css'

const Home = ({ page, services }) => {
  return (
    <main className='Home'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      {page.title && (
        <section className='section HomeTitle'>
          <div className='container'>
            <h1 data-aos='fade-down'>{page.title}</h1>
          </div>
        </section>
      )}

      {page.welcomeImage && (
        <div className='welcomeImage'> {page.welcomeImage}</div>
      )}

      {page.title && <div className='title'> {page.title}</div>}

      {page.buttons.label && <div className='label'> {page.buttons.label}</div>}
      {page.buttons.link && <div className='link'> {page.buttons.link}</div>}

      {page.classesSectionTitle && (
        <div className='classesSectionTitle'> {page.classesSectionTitle}</div>
      )}

      {page.pods.title && <div className='title'> {page.pods.title}</div>}

      {page.pods.description && (
        <div className='description'> {page.pods.description}</div>
      )}

      {page.pods.label && <div className='url'> {page.pods.label}</div>}
      {page.pods.url && <div className='url'> {page.pods.url}</div>}

      {page.servicesSubtitle && (
        <div className='servicesSubtitle'> {page.servicesSubtitle}</div>
      )}

      {page.servicesContent && (
        <div className='servicesContent'> {page.servicesContent}</div>
      )}

      {page.servicesSectionTitle && (
        <div className='servicesSectionTitle'> {page.servicesSectionTitle}</div>
      )}

      {page.servicesSubtitle && (
        <div className='servicesSubtitle'> {page.servicesSubtitle}</div>
      )}

      {page.servicesContent && (
        <div className='servicesContent'> {page.servicesContent}</div>
      )}

      {page.testimonialBanner && (
        <div className='testimonialBanner'> {page.testimonialBanner}</div>
      )}

      {page.testimonialSectionTitle && (
        <div className='testimonialSectionTitle'>
          {' '}
          {page.testimonialSectionTitle}
        </div>
      )}

      {page.testimonialImage && (
        <div className='testimonialImage'> {page.testimonialImage}</div>
      )}

      {page.testimonialThumbnail && (
        <div className='testimonialThumbnail'> {page.testimonialThumbnail}</div>
      )}

      {page.testimonial && (
        <div className='testimonial'> {page.testimonial}</div>
      )}

      {services && (
        <ServicePodSection title={page.servicesTitle} services={services} />
      )}
    </main>
  )
}

export default Home
