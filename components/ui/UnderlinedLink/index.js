import { Fragment } from 'react'

export const UnderlinedLink = ({ children, displayBlock, ...restOfProps }) => (
  <Fragment>
    <a {...restOfProps}>{children}</a>
    <style jsx>{`
    a {
      color: #0789e7;
      display: ${displayBlock ? 'block' : 'inline-block'};
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
