import React from 'react'
import _sortBy from 'lodash/sortBy'

import AboutCard from '../components/AboutCard'
import './AboutSection.css'

const AboutSection = ({ projects = [], title, limit = 9999 }) => {
  return (
    <div className='section thin AboutSection'>
      <div className='container'>
        <AboutCard />
      </div>
    </div>
  )
}
export default AboutSection
