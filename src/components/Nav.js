import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import _sortBy from 'lodash/sortBy'
import _kebabCase from 'lodash/kebabCase'

import Logo from './Logo'
import NavLink from './NavLink'
import './Nav.css'

class Nav extends React.Component {
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = e => {
    if (window.scrollY < 200) {
      document.body.classList.remove('scrolled')
    } else {
      document.body.classList.add('scrolled')
    }
  }

  addBodyClass = () => {
    document.body.classList.add('isHome')
  }

  render () {
    const isHome = this.props.location.pathname === '/'
    const locations = this.props.locations
    const handleNavPopupOpen = this.props.handleNavPopupOpen
    return (
      <nav
        className={`Nav ${isHome ? 'isHome' : ''}`}
        ref={element => {
          this.element = element
        }}
      >
        <div className='container Nav--OuterWrap'>
          <div className='Flex alignCenter justifyBetween relative'>
            <Link className='Logo' style={{ color: 'currentColor' }} to='/'>
              <Logo />
            </Link>
            <div className='nav Flex alignCenter justifyStart mainNav'>
              <NavLink to='/about/' exact>
                About
              </NavLink>
              <div className='NavLink--DropDown'>
                <NavLink className='NavLink--Parent' to='/locations/' exact>
                  Locations
                  <div className='NavLink--Children'>
                    {_sortBy(locations, ['order']).map(locationPod => (
                      <NavLink
                        key={_kebabCase(locationPod.title)}
                        to={`/locations/${_kebabCase(locationPod.title)}/`}
                        exact
                      >
                        {locationPod.title}
                      </NavLink>
                    ))}
                  </div>
                </NavLink>
              </div>
              <NavLink to='/project/' exact>
                Projects
              </NavLink>
              <NavLink to='/blog/' exact>
                Blog
              </NavLink>
              <NavLink to='/contact/' exact>
                Contact
              </NavLink>
              <NavLink
                to='https://eventbright.com/'
                exact
                className='book-now button'
              >
                Book now
              </NavLink>
            </div>
          </div>
          <button
            className='Nav--MenuButton NavLink'
            onClick={handleNavPopupOpen}
            aria-label='Menu Button'
          >
            <MenuSVG />
          </button>
        </div>
      </nav>
    )
  }
}

export default withRouter(Nav)

const MenuSVG = () => (
  <svg
    width='35'
    height='25'
    viewBox='0 0 35 25'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g stroke='currentColor' strokeWidth='3' fill='none' fillRule='evenodd'>
      <path d='M0 2h35M0 13h26M0 23h35' />
    </g>
  </svg>
)
