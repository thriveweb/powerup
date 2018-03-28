import React from 'react'

import BackgroundImage from '../components/BackgroundImage'
import Accordion from '../components/Accordion'
import './AboutCard.css'

const AboutCard = ({ card, className, ...props }) => {
  return (
    <div className={`section thin AboutCard-${className}`}>
      <div className='container AboutCard--container'>
        <div className='AboutCard--image'>
          <BackgroundImage src={card.Image} />
        </div>
        <div className='AboutCard--content'>
          {card.title && (
            <h2 className='AboutCard--content-title'>{card.title}</h2>
          )}
          {card.accordionSections.length > 1 ? (
            <Accordion
              items={card.accordionSections.map(item => {
                // need to test if not accordion
                return {
                  title: item.accordiontitle,
                  description: item.accordionContent
                }
              })}
            />
          ) : (
            <div className='AboutCard--content--single'>
              {card.accordionSections.map(item => item.accordionContent)}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default AboutCard
