import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from '../components/BackgroundImage'
import './PageHeader.css'

const PageHeader = ({ title, bannerImage, className = '', ...props }) => (
  <div className={`section PageHeader thick relative ${className}`} {...props}>
    <BackgroundImage src={bannerImage} lazy opacity='0.5' />
    <div className='container relative'>
      <h1 className='PageHeader--Title'>{title}</h1>
    </div>
  </div>
)

PageHeader.propTypes = {
  title: PropTypes.string
}

export default PageHeader
