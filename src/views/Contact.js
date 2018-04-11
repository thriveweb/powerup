import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import PageHeader from '../components/PageHeader'
import EnquiryFormSimpleAjax from '../components/EnquiryFormSimpleAjax'
import LocationItem from '../components/LocationItem'

import './Contact.css'

export default ({ page, siteTitle, globalSettings, locations }) => (
  <main className='Contact' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} bannerImage={page.bannerImage} />

    <section className='section Contact-Form-Section'>
      <div className='container Contact-Form-flex'>
        <div className='one-half Contact-Form--Info'>
          <h2 className='Contact-Form--Title'>Contact Details</h2>
          <h3>Let's talk</h3>
          <div className='Contact-Form--Address'>
            {globalSettings.officeAddress}
          </div>
          <div className='Contact-links'>
            {globalSettings.phone && (
              <Link className='Contact-link' to={`tel:${globalSettings.phone}`}>
                <img src='/images/call.svg' alt='instagram' />{' '}
                {globalSettings.phone}
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

          <div className='Social--container'>
            <p>Follow us</p>
            {globalSettings.socialMediaCard.twitterSiteAccount && (
              <Link
                target='_blank'
                to={`https://twitter.com/${
                  globalSettings.socialMediaCard.twitterSiteAccount
                }/`}
              >
                <img src='/images/twitter.svg' alt='twitter' />
              </Link>
            )}
            {globalSettings.socialMediaCard.facebookURL && (
              <Link
                target='_blank'
                to={globalSettings.socialMediaCard.facebookURL}
              >
                <img src='/images/facebook.svg' alt='facebook' />
              </Link>
            )}
            {globalSettings.socialMediaCard.linkedinURL && (
              <Link
                target='_blank'
                to={globalSettings.socialMediaCard.linkedinURL}
              >
                <img src='/images/linkedin.svg' alt='linkedin' />
              </Link>
            )}
            {globalSettings.socialMediaCard.instagramURL && (
              <Link
                target='_blank'
                to={globalSettings.socialMediaCard.instagramURL}
              >
                <img src='/images/instagram.svg' alt='instagram' />
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

    <section className='Contact--Locations'>
      <div className='container'>
        <h2 className='taCenter Contact-Form--Title'>Studio Locations</h2>
        <div className='Contact--Locations--Container'>
          {locations.map((locationItem, index) => (
            <LocationItem key={index} locationItem={locationItem} useTitle />
          ))}
        </div>
      </div>
    </section>
  </main>
)
