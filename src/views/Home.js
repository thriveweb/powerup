import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import _kebabCase from 'lodash/kebabCase'
import ReactSwipe from 'react-swipe'

import BackgroundImage from '../components/BackgroundImage'
// import LocationItem from '../components/LocationItem'
// import ServicePodSection from '../components/ServicePodSection'

import './Home.css'

const Home = ({ page, locations, services }) => {
  return (
    <main className='Home'>
      <Helmet>
        <title>{page.title}</title>
      </Helmet>

      {page.welcomeImage && (
        <div className='WelcomeImage relative'>
          <BackgroundImage
            className='WelcomeImage--BackgroundImage'
            opacity='0.5'
            src={page.welcomeImage}
          />
          <div className='background-video'>
            <video className='video' preload='true' loop autoPlay muted>
              <source src='/images/welcomevideo-web.mp4' type='video/mp4' />
            </video>
          </div>

          <h1 className='WelcomeImage--title'> {page.title}</h1>
          {page.buttons && (
            <div className='WelcomeImage--links'>
              {page.buttons.map((button, index) => (
                <Link
                  className={`button-outline pos-${index}`}
                  key={button + index}
                  to={`/${_kebabCase(button.link)}/`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {page.pods && (
        <div className='PodsGrid section'>
          <div className='container '>
            <h2 className='ClassesSection--title taCenter'>
              {page.classesSectionTitle}
            </h2>
            <div className='PodsGrid--wrap'>
              {page.pods.map((pod, index) => (
                <div key={index + pod.title} className='PodsGrid--pod'>
                  <BackgroundImage src={pod.backgroundImage} />
                  <Link className='button' to={pod.url}>
                    {pod.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {page.servicesSectionTitle && (
        <div className='section ServicesSection'>
          <div className='container ServicesSection--wrap'>
            <div className='ServicesSection--info'>
              <h2 className='ServicesSection--title'>
                {page.servicesSectionTitle}
              </h2>
              <h3 className='ServicesSection--subtitle'>
                {page.servicesSubtitle}
              </h3>
              <div className='ServicesSection--Content'>
                {page.servicesContent}
              </div>
            </div>
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
        </div>
      )}

      {page.testimonialBanner && (
        <div className='TestimonialSection relative section thick'>
          <BackgroundImage
            className='TestimonialSection--banner'
            src={page.testimonialBanner}
            opacity='0.5'
          />
          <div className='container relative TestimonialSection--wrap'>
            <h2 className='TestimonialSection--title'>
              {page.testimonialSectionTitle}
            </h2>
            <ReactSwipe
              key={page.quotes.length}
              className='carousel'
              swipeOptions={{
                speed: 1000,
                auto: 3000,
                continuous: true,
                disableScroll: false,
                stopPropagation: false
              }}
            >
              {page.quotes.map((quote, index) => (
                <div
                  key={index + quote.testimonialFrom}
                  className='TestimonialSection--quote'
                >
                  <div className='TestimonialSection--imageWrap'>
                    <BackgroundImage
                      className='TestimonialSection--image'
                      src={quote.testimonialImage}
                      lazy='false'
                    />
                  </div>
                  <div className='TestimonialSection--thumbnailWrap'>
                    <div className='TestimonialSection--from'>
                      <BackgroundImage
                        className='TestimonialSection--thumbnail'
                        src={quote.testimonialThumbnail}
                        lazy='false'
                      />
                      <strong>{quote.testimonialFrom}</strong>
                    </div>
                    <div className='TestimonialSection--testimonial'>
                      {quote.testimonial}
                    </div>
                  </div>
                </div>
              ))}
            </ReactSwipe>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
