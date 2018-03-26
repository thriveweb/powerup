import React from 'react'
import { NavLink } from 'react-router-dom'

import './NavLink.css'

export default ({ className, children, ...props }) => (
  <NavLink {...props} className={`NavLink ${className || ''}`}>
    {children} <div className='hover'>•</div>
  </NavLink>
)
