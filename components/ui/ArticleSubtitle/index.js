import React, { Fragment } from 'react'

export const ArticleSubtitle = ({ children }) => (
  <Fragment>
    <h2>{children}</h2>
    <style jsx>{`
    h2 {
      color: #444;
      font-size: 24px;
      font-weight: 500;
      padding-right: 16px;
    }
    `}</style>
  </Fragment>
)
