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
        <div className='container'>
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
              <Link className='button' to={singleLocation.bookingLink}>
                Book a class
              </Link>
            )}
            <div className='social--container'>
              <p>Follow studio</p>
              {singleLocation.twitterURL && (
                <Link target='_blank' to={singleLocation.twitterURL}>
                  <img src='/images/twitter.svg' alt='twitter' />
                </Link>
              )}
              {singleLocation.facebookURL && (
                <Link target='_blank' to={singleLocation.facebookURL}>
                  <img src='/images/facebook.svg' alt='facebook' />
                </Link>
              )}
              {singleLocation.linkedinURL && (
                <Link target='_blank' to={singleLocation.linkedinURL}>
                  <img src='/images/linkedin.svg' alt='linkedin' />
                </Link>
              )}
              {singleLocation.instagramURL && (
                <Link target='_blank' to={singleLocation.instagramURL}>
                  <img src='/images/instagram.svg' alt='instagram' />
                </Link>
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
      <section className='section Links'>
        <div className='container'>
          {singleLocation.bookingLink && (
            <Link to={singleLocation.bookingLink}>
              <img src='/images/instagram.svg' alt='instagram' /> Book a class
            </Link>
          )}

          {singleLocation.location.address && (
            <Link
              to={`https://www.google.com/maps/dir//${
                singleLocation.location.address
              }`}
            >
              <img src='/images/instagram.svg' alt='instagram' /> Map it
            </Link>
          )}
          {singleLocation.phone && (
            <Link to={`tel:${singleLocation.phone}`}>
              <img src='/images/instagram.svg' alt='instagram' /> Call studio
            </Link>
          )}
          {singleLocation.email && (
            <Link to={`mailto:${singleLocation.email}`}>
              <img src='/images/instagram.svg' alt='instagram' /> Email studio
            </Link>
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
          <div className='container'>
            <div className='bannerSectionImage'>bannerSectionImage</div>
            {singleLocation.bannerSectionTitle && (
              <div className='bannerSectionTitle'>bannerSectionTitle</div>
            )}
            {singleLocation.bannerSectionSubtitle && (
              <div className='bannerSectionSubtitle'>bannerSectionSubtitle</div>
            )}
            {singleLocation.bannerSectionContent && (
              <div className='bannerSectionContent'>bannerSectionContent</div>
            )}
            {singleLocation.bannerSectionSheduleURL && (
              <div className='bannerSectionSheduleURL'>
                bannerSectionSheduleURL
              </div>
            )}
            {singleLocation.bannerSectionPackageURL && (
              <div className='bannerSectionPackageURL'>
                bannerSectionPackageURL
              </div>
            )}
          </div>
        </section>
      )}
    </article>
  )
}
export default SingleLocation
