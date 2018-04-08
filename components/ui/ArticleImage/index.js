import { Fragment } from 'react'

export const ArticleImage = (props) => (
  <Fragment>
    <img {...props} />
    <style jsx>{`
      img {
        height: auto;
        max-width: 100%;
      }
    `}</style>
  </Fragment>
)
