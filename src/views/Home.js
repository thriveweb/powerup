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

      {services && (
        <ServicePodSection title={page.servicesTitle} services={services} />
      )}
    </main>
  )
}

export default Home
