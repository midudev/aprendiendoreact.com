import { Fragment } from 'react'

export const ArticleParagraph = ({children, ...props}) => (
  <Fragment>
    <p {...props}>
      {children}
    </p>
    <style jsx>{`
      p {
        color: #444;
        font-size: 16px;
        line-height: 175%;
      }
    `}</style>
  </Fragment>
)
