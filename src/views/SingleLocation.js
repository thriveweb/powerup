import React from 'react'
import Helmet from 'react-helmet'

import Content from '../components/Content'
import Gallery from '../components/Gallery'

import './SingleLocation.css'

export default ({ singleLocation }) => (
  <article className='Location' data-aos='fade-up'>
    <Helmet>
      <title>{singleLocation.title}</title>
    </Helmet>

    <section className='section thin'>
      <div className='container Flex alignStart justifyBetween'>
        {singleLocation.projectGalleryImages && (
          <div className='SingleLocation--gallery'>
            <Gallery
              images={singleLocation.projectGalleryImages.map(
                obj => obj.galleryimage
              )}
            />
          </div>
        )}
        <div className='SingleLocation--content'>
          {singleLocation.title && <h1>{singleLocation.title}</h1>}
          {singleLocation.content && (
            <Content source={singleLocation.content} />
          )}
          <div className='breakout Flex alignStart justifyBetween'>
            {singleLocation.year && (
              <div className='year breakout--box'>
                <h3>Year</h3>
                <p>{singleLocation.year}</p>
              </div>
            )}
            {singleLocation.typeofproject && (
              <div className='type breakout--box'>
                <h3>Type of project</h3>
                <p>{singleLocation.typeofproject}</p>
              </div>
            )}
            {singleLocation.client && (
              <div className='client breakout--box'>
                <h3>Client</h3>
                <p>{singleLocation.client}</p>
              </div>
            )}
          </div>

          {singleLocation.testimonial && (
            <div className='testimonials'>
              <h3>Client Testimonials</h3>
              <em>&quot;</em>
              <blockquote>{singleLocation.testimonial}</blockquote>
              <div className='from Flex alignStart justifyStart'>
                {singleLocation.name && <p>{singleLocation.name}</p>}
                {singleLocation.role && <small>{singleLocation.role}</small>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  </article>
)
