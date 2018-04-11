import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import PageHeader from '../components/PageHeader'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'

import './Contact.css'

export default ({ page, siteTitle, globalSettings }) => (
  <main className='Contact' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} bannerImage={page.bannerImage} />

    <section className='section thick'>
      <div className='container Flex'>
        <div className='one-half'>
          <h2>Contact Details</h2>
          <h3>Let's talk</h3>
          {globalSettings.officeAddress}
          <div className='Contact-links'>
            {globalSettings.phone && (
              <Link className='Contact-link' to={`tel:${globalSettings.phone}`}>
                <img src='/images/call.svg' alt='instagram' /> Call studio
              </Link>
            )}
            {globalSettings.email && (
              <Link
                className='Contact-link'
                to={`mailto:${globalSettings.email}`}
              >
                <img src='/images/email.svg' alt='instagram' />{' '}
                {globalSettings.email}
              </Link>
            )}
          </div>
        </div>
        <div className='Contact-form one-half'>
          <h3>send a message</h3>
          <EnquiryFormSimpleAjax
            className='contactForm'
            name='Simple Form Ajax'
          />
        </div>
      </div>
    </section>
  </main>
)
