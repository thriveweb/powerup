import React from 'react'
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import _kebabCase from 'lodash/kebabCase'

import BackgroundImage from '../components/BackgroundImage'
import LocationItem from '../components/LocationItem'

import ServicePodSection from '../components/ServicePodSection'

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

      {/* {locations && (
        <div className='HomeLocations section'>
          <div className='container'>
            <h2 className='HomeLocations--title taCenter'>Studio locations</h2>
            <div className='Locations--Grid'>
              {locations.thumbnailLocations.map((locationItem, index) => (
                <LocationItem key={index} locationItem={locationItem} />
              ))}
            </div>
            <div className='HomeLocations--link taCenter'>
              <Link className='button' to='/locations/'>
                View all
              </Link>
            </div>
          </div>
        </div>
      )} */}

      {page.pods && (
        <div className='PodsGrid section'>
          <div className='container '>
            <h2 className='ClassesSection--title taCenter'>
              {page.classesSectionTitle}
            </h2>
            <div className='PodsGrid--wrap'>
              {page.pods.map((pod, index) => (
                <div key={index + pod.title} className='PodsGrid--pod'>
                  <BackgroundImage src={pod.backgroundImage} opacity='0.5' />
                  {/* <h3 className='PodsGrid--title'>{pod.title}</h3>
                  <div className='PodsGrid--description'>
                    {' '}
                    {pod.description}
                  </div> */}
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
              <p>5x deep-etched images running across</p>
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
            <div className='TestimonialSection--quote'>
              <div className='TestimonialSection--imageWrap'>
                <BackgroundImage
                  className='TestimonialSection--image'
                  src={page.testimonialImage}
                />
              </div>
              <div className='TestimonialSection--thumbnailWrap'>
                <div className='TestimonialSection--from'>
                  <BackgroundImage
                    className='TestimonialSection--thumbnail'
                    src={page.testimonialThumbnail}
                  />
                  <strong>{page.testimonialFrom}</strong>
                </div>
                <div className='TestimonialSection--testimonial'>
                  {page.testimonial}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
