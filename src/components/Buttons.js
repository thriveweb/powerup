import React from 'react'

import NavLink from './NavLink'
import _kebabCase from 'lodash/kebabCase'
import './Buttons.css'

const Buttons = ({ buttons, className, ...props }) => {
  return (
    <div className={`${className}`}>
      {buttons.map((item, index) => (
        <NavLink
          className='button'
          key={index + `links`}
          to={`/` + _kebabCase(item.link) + `/`}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}
export default Buttons
