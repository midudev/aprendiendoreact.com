import React, { Fragment } from 'react'

export const ArticleCaption = ({ children }) => (
  <Fragment>
    <span>{children}</span>
    <style jsx>{`
    span {
      color: #777;
      font-size: 13px;
      text-align: center;
      display: block;
      max-width: 80%;
      margin: 0 auto;
      padding-bottom: 16px;
    }
    `}</style>
  </Fragment>
)
