import { Fragment } from 'react'

export const BlogLink = () => (
  <Fragment>
    <div>
      <a href='/blog'>Ir al blog 📝</a>
    </div>
    <style jsx>{`
    div {
      bottom: 16px;
      left: 0;
      position: absolute;
      text-align: center;
      width: 100%;
    }
    a {
      color: #fff;
    }
    a:hover {
      text-decoration: underline;
    }
    `}</style>
  </Fragment>
)
