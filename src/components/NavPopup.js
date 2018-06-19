import React from 'react'
import { withRouter } from 'react-router-dom'

import NavLink from './NavLink'
import './NavPopup.css'

class NavPopup extends React.Component {
  render () {
    const { active, handleClose } = this.props
    return (
      <div className={`NavPopup ${active && 'active'}`}>
        <button className='NavPopup--CloseButton' onClick={handleClose}>
          <CloseSVG />
        </button>
        <div className='flex'>
          <div className='inner'>
            <NavLink onClick={handleClose} to='/about/' exact>
              About
            </NavLink>
            <NavLink onClick={handleClose} to='/locations/' exact>
              Locations
            </NavLink>
            <NavLink onClick={handleClose} to='/class-packages/' exact>
              Class Packages
            </NavLink>
            <NavLink onClick={handleClose} to='/contact/' exact>
              Contact
            </NavLink>
            <NavLink
              onClick={handleClose}
              to='/schedule/'
              exact
              className='book-now button'
            >
              Book now
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavPopup)

const CloseSVG = () => (
  <svg
    width='28'
    height='27'
    viewBox='0 0 28 27'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g stroke='#ffffff' strokeWidth='3' fill='none' fillRule='evenodd'>
      <path d='M2 26L27 1M2 1l25 25' />
    </g>
  </svg>
)
