import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
// import { Switch } from 'react-router-transition'
import _kebabCase from 'lodash/kebabCase'
// import _findIndex from 'lodash/findIndex'
import _merge from 'lodash/merge'

import ScrollToTopOnMount from './components/ScrollToTopOnMount'
import AOS from './components/AOS'
import Meta from './components/Meta'
import Home from './views/Home'
import About from './views/About'
import Locations from './views/Locations'
import SingleLocation from './views/SingleLocation'
import Contact from './views/Contact'
import Default from './views/Default'
import Faq from './views/Faq'
import NoMatch from './views/NoMatch'
import Nav from './components/Nav'
import NavPopup from './components/NavPopup'
import Footer from './components/Footer'
import ServiceWorkerNotifications from './components/ServiceWorkerNotifications'
import Spinner from './components/Spinner'
// import { documentHasTerm } from './util/collection'

import data from './data.json'

class App extends Component {
  state = {
    data,
    navPopup: false,
    loading: false
  }

  componentDidMount = () => {
    this.fetchPreviewContent()
  }

  fetchPreviewContent = () => {
    if (
      !window.netlifyIdentity ||
      !window.netlifyIdentity.currentUser() ||
      process.env.NODE_ENV === 'development'
    ) {
      return false
    }
    import('./util/fetch-content').then(({ fetchContent }) => {
      this.setState({ loading: true })
      fetchContent()
        .then(newData => {
          this.setState(prevState => {
            const data = _merge(prevState.data, newData)
            return { data, loading: false }
          })
        })
        .catch(() => this.setState({ loading: false }))
    })
  }

  getDocument = (collection, name) =>
    this.state.data[collection] &&
    this.state.data[collection].filter(page => page.name === name)[0]

  getDocuments = collection => this.state.data[collection]

  handleNavPopupClose = () => this.setState({ navPopup: false })
  handleNavPopupOpen = () => this.setState({ navPopup: true })

  render () {
    const globalSettings = this.getDocument('settings', 'global')
    const {
      siteTitle,
      siteUrl,
      siteDescription,
      socialMediaCard,
      headerScripts
    } = globalSettings

    /* Custom posts setup */

    const locations = this.getDocuments('locations')
    const services = this.getDocuments('services')

    const RouteWithFooter = ({ children, scrollToTop = true, ...props }) => (
      <div className='RouteWithFooter' {...props}>
        {children}
        {scrollToTop && <ScrollToTopOnMount />}
        <Footer globalSettings={globalSettings} />
      </div>
    )

    return (
      <Router>
        <div className='React-Wrap'>
          {this.state.loading && <Spinner />}
          <AOS />
          <ServiceWorkerNotifications reloadOnUpdate />
          <Helmet titleTemplate={`${siteTitle} | %s`} />
          <Meta
            title={siteTitle}
            url={siteUrl}
            description={siteDescription}
            absoluteImageUrl={
              socialMediaCard &&
              socialMediaCard.image &&
              siteUrl + socialMediaCard.image
            }
            twitterCreatorAccount={
              socialMediaCard && socialMediaCard.twitterCreatorAccount
            }
            twitterSiteAccount={
              socialMediaCard && socialMediaCard.twitterSiteAccount
            }
            headerScripts={headerScripts}
          />
          <Nav
            locations={locations}
            handleNavPopupOpen={this.handleNavPopupOpen}
          />
          <NavPopup
            locations={services}
            active={this.state.navPopup}
            handleClose={this.handleNavPopupClose}
          />
          <Switch>
            <Route
              path='/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Home
                    page={this.getDocument('pages', 'home')}
                    locations={this.getDocument('pages', 'locations')}
                    services={services}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/about/'
              exact
              render={props => (
                <RouteWithFooter>
                  <About
                    page={this.getDocument('pages', 'about')}
                    services={services}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/locations/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Locations
                    page={this.getDocument('pages', 'locations')}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/locations/:slug/'
              render={props => {
                const slug = props.match.params.slug
                const singleLocation = locations.find(
                  item => _kebabCase(item.title) === slug
                )
                return (
                  <RouteWithFooter>
                    <SingleLocation
                      singleLocation={singleLocation}
                      {...props}
                    />
                  </RouteWithFooter>
                )
              }}
            />
            <Route
              path='/class-packages/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Default
                    page={this.getDocument('pages', 'classPackages')}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/book-a-class/'
              exact
              render={props => {
                const Comp = props => <Default {...props} />
                return (
                  <RouteWithFooter>
                    <Comp
                      page={this.getDocument('pages', 'bookAClass')}
                      {...props}
                    />
                  </RouteWithFooter>
                )
              }}
            />
            <Route
              path='/contact/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Contact
                    page={this.getDocument('pages', 'contact')}
                    globalSettings={globalSettings}
                    siteTitle={siteTitle}
                    locations={locations}
                    {...props}
                  />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/book-now/'
              exact
              render={props => {
                const Comp = props => <Default {...props} />
                return (
                  <RouteWithFooter>
                    <Comp
                      page={this.getDocument('pages', 'bookNow')}
                      {...props}
                    />
                  </RouteWithFooter>
                )
              }}
            />
            <Route
              path='/faq/'
              exact
              render={props => (
                <RouteWithFooter>
                  <Faq page={this.getDocument('pages', 'faq')} {...props} />
                </RouteWithFooter>
              )}
            />
            <Route
              path='/disclaimer/'
              exact
              render={props => {
                const Comp = props => <Default {...props} />
                return (
                  <RouteWithFooter>
                    <Comp
                      page={this.getDocument('pages', 'disclaimer')}
                      {...props}
                    />
                  </RouteWithFooter>
                )
              }}
            />

            <Route
              render={() => (
                <RouteWithFooter>
                  <NoMatch siteUrl={siteUrl} />
                </RouteWithFooter>
              )}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
