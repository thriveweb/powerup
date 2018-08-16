import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import _merge from 'lodash/merge'

import { slugify } from './util/url'
import ScrollToTopOnMount from './components/ScrollToTopOnMount'
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

const RouteWithMeta = ({ component: Component, ...props }) => (
  <Route
    {...props}
    render={routeProps => (
      <Fragment>
        <ScrollToTopOnMount />
        <Meta {...props} />
        <Component {...routeProps} {...props} />
      </Fragment>
    )}
  />
)

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

    return (
      <Router>
        <div className='React-Wrap'>
          {this.state.loading && <Spinner />}
          {/* <AOS /> */}
          <ServiceWorkerNotifications reloadOnUpdate />
          <Helmet
            defaultTitle={siteTitle}
            titleTemplate={`${siteTitle} | %s`}
          />
          <Meta
            headerScripts={headerScripts}
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
            <RouteWithMeta
              path='/'
              exact
              component={Home}
              page={this.getDocument('pages', 'home')}
              locations={this.getDocument('pages', 'locations')}
              services={services}
            />
            <RouteWithMeta
              path='/about/'
              exact
              component={About}
              page={this.getDocument('pages', 'about')}
              services={services}
            />
            <RouteWithMeta
              path='/locations/'
              exact
              component={Locations}
              page={this.getDocument('pages', 'locations')}
            />

            {locations.map((location, index) => {
              const path = slugify(`/locations/${location.title}`)
              return (
                <RouteWithMeta
                  key={path}
                  path={path}
                  exact
                  component={SingleLocation}
                  singleLocation={location}
                />
              )
            })}

            <RouteWithMeta
              path='/class-packages/'
              exact
              component={Default}
              page={this.getDocument('pages', 'classPackages')}
            />
            <RouteWithMeta
              path='/account/'
              exact
              component={Default}
              page={this.getDocument('pages', 'account')}
            />
            <RouteWithMeta
              path='/checkin/'
              exact
              component={Default}
              page={this.getDocument('pages', 'checkin')}
            />
            <RouteWithMeta
              path='/classes/'
              exact
              component={Default}
              page={this.getDocument('pages', 'classes')}
            />
            <RouteWithMeta
              path='/instructor/'
              exact
              component={Default}
              page={this.getDocument('pages', 'instructor')}
            />
            <RouteWithMeta
              path='/pricing/'
              exact
              component={Default}
              page={this.getDocument('pages', 'pricing')}
            />
            <RouteWithMeta
              path='/register/'
              exact
              component={Default}
              page={this.getDocument('pages', 'register')}
            />
            <RouteWithMeta
              path='/schedule/'
              exact
              component={Default}
              page={this.getDocument('pages', 'schedule')}
            />
            <RouteWithMeta
              path='/contact/'
              exact
              component={Contact}
              page={this.getDocument('pages', 'contact')}
              globalSettings={globalSettings}
              siteTitle={siteTitle}
              locations={locations}
            />
            <RouteWithMeta
              path='/book-now/'
              exact
              component={Default}
              page={this.getDocument('pages', 'bookNow')}
            />
            <RouteWithMeta
              path='/faq/'
              exact
              component={Faq}
              page={this.getDocument('pages', 'faq')}
            />
            <RouteWithMeta
              path='/disclaimer/'
              exact
              component={Default}
              page={this.getDocument('pages', 'disclaimer')}
            />
            <RouteWithMeta
              path='/disclaimer/'
              exact
              component={Default}
              page={this.getDocument('pages', 'disclaimer')}
            />
            <Route render={() => <NoMatch siteUrl={siteUrl} />} />
          </Switch>
          <Footer globalSettings={globalSettings} />
        </div>
      </Router>
    )
  }
}

export default App
