import { Fragment } from 'react'

export const StrongStatementLink = ({ children, ...restOfProps }) => (
  <Fragment>
    <a {...restOfProps}>{children}</a>
    <style jsx>{`
    a {
      color: #0789e7;
      position: relative;
      transition: opacity .3s ease-in-out;
    }
    a:hover {
      opacity: .75;
    }
    a:hover::after {
      transform: rotate(-1deg);
    }
    a::after {
      background-color: #0789e7;
      bottom: -5px;
      left: 0;
      content: '';
      display: inline-block;
      height: 2px;
      position: absolute;
      transition: transform .3s ease-in-out;
      width: 100%;
    }
    `}
    </style>
  </Fragment>
)

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
