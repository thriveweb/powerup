import React from 'react'

import AboutCard from '../components/AboutCard'
import './AboutSection.css'

const AboutSection = ({ accordionSections = [] }) => {
  return (
    <main>
      {accordionSections.map((card, index) => (
        <AboutCard
          key={index + `card`}
          className={index % 2 ? `even` : `odd`}
          card={card}
        />
      ))}
    </main>
  )
}
export default AboutSection
