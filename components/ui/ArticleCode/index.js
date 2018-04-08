import React, { Fragment } from 'react'

export const ArticleCode = ({ children }) => (
  <Fragment>
    <code>{children}</code>
    <style jsx>{`
    code {
      background: rgba(255,229,100,0.2);
      color: #1a1a1a;
      padding: 4px;
    }
    `}</style>
  </Fragment>
)
