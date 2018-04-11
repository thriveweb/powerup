import React from 'react'
import { Link } from 'react-router-dom'
import _sortBy from 'lodash/sortBy'
import _kebabCase from 'lodash/kebabCase'

import InstagramFeed from './InstagramFeed'
import NavLink from './NavLink'

import './Footer.css'

export default ({
  globalSettings,
  navLinks,
  footerPages,
  copyrightPages,
  ...props
}) => (
  <main>
    <div className='section'>
      <div className='container skinny Flex justifyBetween center'>
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
          <Link target='_blank' to={globalSettings.socialMediaCard.facebookURL}>
            <img src='/images/facebook.svg' alt='facebook' />
          </Link>
        )}
        {globalSettings.socialMediaCard.linkedinURL && (
          <Link target='_blank' to={globalSettings.socialMediaCard.linkedinURL}>
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

    {globalSettings.socialMediaCard.instagramURL && (
      <InstagramFeed
        instagramUrl={globalSettings.socialMediaCard.instagramURL}
        count='10'
      />
    )}

    <footer className='Footer'>
      <div className='container mainFooter Flex justifyBetween center'>
        <Link to='/'>
          <img src='/images/logo.svg' alt='Spacial Studio' />
        </Link>
        <div className='Flex alignStart justifyBetween flexWrap halfs'>
          <div className='pods'>
            <h3>Contact</h3>
            {globalSettings.email && (
              <p>
                <a href={`mailto:${globalSettings.email}`}>
                  {globalSettings.email}
                </a>
              </p>
            )}
            {globalSettings.phone && (
              <p>
                <a className='tel' href={`tel:${globalSettings.phone}`}>
                  {globalSettings.phone}
                </a>
              </p>
            )}
            {globalSettings.officeAddress && (
              <p>{globalSettings.officeAddress}</p>
            )}
          </div>
          <div className='pods'>
            <h3>Info</h3>
            {_sortBy(footerPages, ['order']).map(fPage => (
              <NavLink
                key={_kebabCase(fPage.title)}
                to={`/footer-pages/${_kebabCase(fPage.title)}/`}
                exact
              >
                {fPage.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className='container Flex alignCenter justifyBetween flexWrap Footer--Copyright'>
        <div className='Flex alignCenter justifyBetween flexWrap'>
          <small>© {new Date().getFullYear()} All rights reserved. </small>
          <small>
            <a href='https://thriveweb.com.au/'> Build on the Gold Coast</a>
          </small>
        </div>
        <div className='Flex alignCenter justifyBetween flexWrap'>
          {_sortBy(copyrightPages, ['order']).map(copyPage => (
            <NavLink
              key={_kebabCase(copyPage.title)}
              to={`/copyright-pages/${_kebabCase(copyPage.title)}/`}
              exact
            >
              {copyPage.title}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  </main>
)
