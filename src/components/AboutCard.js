import React from 'react'

import BackgroundImage from '../components/BackgroundImage'
import './AboutCard.css'

const AboutCard = ({ card, className, ...props }) => {
  console.log(card)
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
          {card.accordionSections.map((items, index) => (
            <div key={index}>
              <h2>{items.accordiontitle}</h2>
              <p>{items.accordionContent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default AboutCard
