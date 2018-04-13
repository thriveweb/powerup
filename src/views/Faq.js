import React from 'react'
import Helmet from 'react-helmet'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Accordion from '../components/Accordion'

import './Faq.css'

const Faq = ({ page, ...props }) => (
  <main className='Faq' data-aos='fade-up'>
    <Helmet>
      <title>{page.title}</title>
    </Helmet>
    <PageHeader title={page.title} bannerImage={page.bannerImage} />
    <section className='section FAQ'>
      <div className='container skinny'>
        <Content className='taCenter' source={page.content} />
        {page.accordion.length > 1 ? (
          <Accordion
            items={page.accordion.map(item => {
              // need to test if not accordion
              return {
                title: item.accordiontitle,
                description: item.accordionContent
              }
            })}
          />
        ) : (
          <div className='AboutCard--content--single'>
            {page.accordion.map(item => item.accordionContent)}
          </div>
        )}
      </div>
    </section>
  </main>
)
export default Faq
