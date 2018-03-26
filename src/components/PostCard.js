import React from 'react'
import { Link } from 'react-router-dom'
import _kebabCase from 'lodash/kebabCase'

import BackgroundImage from './BackgroundImage'
import './PostCard.css'

export default class PostCard extends React.Component {
  render () {
    const { postItem, className = '', ...props } = this.props
    return (
      <Link
        to={`/blog/${_kebabCase(postItem.title)}/`}
        className={`PostCard ${className}`}
        {...props}
      >
        {postItem.postFeaturedImage && (
          <div className='PostCard--Image relative'>
            <BackgroundImage
              src={postItem.postFeaturedImage}
              alt={postItem.title}
            />
          </div>
        )}
        {postItem.category && (
          <div className='PostCard--Category'>{postItem.category}</div>
        )}
        <div className='PostCard--Content'>
          {postItem.title && (
            <h3 className='PostCard--Title'>{postItem.title}</h3>
          )}
          {postItem.excerpt && (
            <div className='PostCard--Excerpt'>
              {postItem.excerpt.length > 160
                ? postItem.excerpt.slice(0, 157) + '...'
                : postItem.excerpt}
            </div>
          )}
        </div>
      </Link>
    )
  }
}
