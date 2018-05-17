import { Fragment } from 'react'

export const CTA = () => (
  <Fragment>
    <a
      href='https://www.udemy.com/aprendiendo-react/?couponCode=APR_REACT_WEB_9'>
      <span>Comprar ahora 🎓</span>
    </a>
    <style jsx>{`
    a {
      background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
      border-color: #a88734 #9c7e31 #846a29;
      border-radius: 4px;
      border: 1px solid;
      color: #222;
      display: inline-flex;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: -.5px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
      padding: 8px 16px;
      text-shadow: 0 0 3px rgba(255, 255, 255, .75);
      transition: all .4s ease-in-out
    }
    a:hover {
      background: linear-gradient(to bottom,#f5d78e,#eeb933);
      border-color: #a88734 #9c7e31 #846a29;
    }
    s {
      padding: 0px 8px;
    }
    `}</style>
  </Fragment>
)
