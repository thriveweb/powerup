import React, { Component } from 'react'
import Marked from 'react-markdown'
import { iframeResizer } from 'iframe-resizer'

import { getImageSrc, getImageSrcset } from '../util/getImageUrl'
import './Content.css'

export default ({ source, className = '' }) => (
  <Marked
    className={`Content ${className}`}
    source={source}
    renderers={{
      Image: ImageWithSrcset,
      HtmlBlock: HtmlBlock
    }}
  />
)

const ImageWithSrcset = ({ nodeKey, src, alt, ...props }) => (
  <img
    className='Content--Image'
    {...props}
    src={getImageSrc(src)}
    srcSet={getImageSrcset(src)}
    alt={alt}
  />
)

class HtmlBlock extends Component {
  iframe = []
  componentDidMount () {
    if (this.props.literal.indexOf('iframe')) {
      this.iframe = iframeResizer({
        log: false,
        checkOrigin: false,
        enablePublicMethods: true,
        minHeight: 768
      })
    }
  }
  componentWillUnmount () {
    if (this.iframe.length) {
      this.iframe.forEach(iframe => {
        iframe.iFrameResizer.close()
      })
    }
  }
  render () {
    const { literal } = this.props
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: literal
        }}
      />
    )
  }
}
