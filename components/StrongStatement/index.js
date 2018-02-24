import { Fragment } from 'react'

export const StrongStatement = ({ children }) => (
  <Fragment>
    <div>
      <strong>{children}</strong>
    </div>
    <style jsx>{`
    strong {
      color: #555;
      display: block;
      font-size: 21px;
      line-height: 150%;
      margin: 50px auto;
      max-width: 600px;
      text-align: center;
    }
    `}
    </style>
  </Fragment>
)
