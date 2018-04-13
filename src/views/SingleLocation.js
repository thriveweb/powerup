import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'

import MapBanner from '../components/MapBanner'
import PageHeader from '../components/PageHeader'
import BackgroundImage from '../components/BackgroundImage'

import './SingleLocation.css'

const SingleLocation = ({ singleLocation, ...props }) => {
  return (
    <article className='Location' data-aos='fade-up'>
      <Helmet>
        <title>{singleLocation.title}</title>
      </Helmet>
      <PageHeader
        title={singleLocation.title}
        bannerImage={singleLocation.bannerImage}
      />
      <section className='section SingleLocation relative'>
        <div className='container skinny'>
          <div className='SingleLocation--content'>
            {singleLocation.title && (
              <h2 className='SingleLocation--content--title'>
                {singleLocation.title}
              </h2>
            )}
            {singleLocation.subTitle && <h2>{singleLocation.subTitle}</h2>}
            {singleLocation.location.address && (
              <p>{singleLocation.location.address}</p>
            )}
            {singleLocation.classInfo && <p>{singleLocation.classInfo}</p>}

            {singleLocation.bookingLink && (
              <Link className='button' to={`/${singleLocation.bookingLink}/`}>
                Book a class
              </Link>
            )}
            <div className='Social--container'>
              <p>Follow studio</p>
              {singleLocation.twitterURL && (
                <a target='_blank' href={singleLocation.twitterURL}>
                  <img src='/images/twitter.svg' alt='twitter' />
                </a>
              )}
              {singleLocation.facebookURL && (
                <a target='_blank' href={singleLocation.facebookURL}>
                  <img src='/images/facebook.svg' alt='facebook' />
                </a>
              )}
              {singleLocation.linkedinURL && (
                <a target='_blank' href={singleLocation.linkedinURL}>
                  <img src='/images/linkedin.svg' alt='linkedin' />
                </a>
              )}
              {singleLocation.instagramURL && (
                <a target='_blank' href={singleLocation.instagramURL}>
                  <img src='/images/instagram.svg' alt='instagram' />
                </a>
              )}
            </div>
          </div>
          <div className='SingleLocation--thumbnail square'>
            <BackgroundImage
              className='square-content'
              src={singleLocation.featuredThumbnail}
            />
          </div>
        </div>
      </section>
      <section className='Links'>
        <div className='container  Links--container'>
          {singleLocation.bookingLink && (
            <Link className='Links-link' to={`/${singleLocation.bookingLink}/`}>
              <img src='/images/book-online.svg' alt='instagram' /> Book a class
            </Link>
          )}

          {singleLocation.location.address && (
            <a
              className='Links-link'
              href={`https://www.google.com/maps/dir//${
                singleLocation.location.address
              }`}
            >
              <img src='/images/marker.svg' alt='instagram' /> Map it
            </a>
          )}
          {singleLocation.phone && (
            <a className='Links-link' href={`tel:${singleLocation.phone}`}>
              <img src='/images/call.svg' alt='instagram' /> Call studio
            </a>
          )}
          {singleLocation.email && (
            <a className='Links-link' href={`mailto:${singleLocation.email}`}>
              <img src='/images/email.svg' alt='instagram' /> Email studio
            </a>
          )}
        </div>
      </section>
      {singleLocation.location.lat && (
        <div className='section thin MapBanner'>
          <MapBanner
            apiKey='AIzaSyCcfv8L8FmeieABBF2u1dZxeB3NlULe_Nw'
            lat={singleLocation.location.lat}
            lng={singleLocation.location.lng}
          />
        </div>
      )}
      {singleLocation.staff && (
        <section className='section Staff'>
          <div className='containee'>
            <h2 className='taCenter'>meet instructors</h2>
            <div className='Staff--wraper'>
              {singleLocation.staff.map((member, index) => (
                <div key={member.name + index} className='Staff--Menber square'>
                  <BackgroundImage
                    className='square-content'
                    src={member.image}
                  />
                  <div className='Staff--Menber--name'>{member.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {singleLocation.bannerSectionImage && (
        <section className='section BannerSection'>
          <div className='container BannerSection--container'>
            <div className='one-half'>
              {singleLocation.bannerSectionTitle && (
                <h2 className='BannerSection--Title'>
                  {singleLocation.bannerSectionTitle}
                </h2>
              )}
              {singleLocation.bannerSectionSubtitle && (
                <h3 className='BannerSection--Subtitle'>
                  {singleLocation.bannerSectionSubtitle}
                </h3>
              )}
              {singleLocation.bannerSectionContent && (
                <div className='BannerSection--Content'>
                  {singleLocation.bannerSectionContent}
                </div>
              )}
              {singleLocation.bannerSectionSheduleURL && (
                <Link
                  className='button'
                  to={singleLocation.bannerSectionSheduleURL}
                >
                  see schedule
                </Link>
              )}
              {singleLocation.bannerSectionPackageURL && (
                <Link
                  className='button'
                  to={singleLocation.bannerSectionPackageURL}
                >
                  package options
                </Link>
              )}
            </div>
            <div className='one-half'>
              <BackgroundImage
                className='BannerSection--Image'
                src={singleLocation.bannerSectionImage}
              />
            </div>
          </div>
        </section>
      )}
    </article>
  )
}
export default SingleLocation
