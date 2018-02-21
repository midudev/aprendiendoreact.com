import { Fragment } from 'react'
export const ScrollableContent = ({ children }) => (
  <Fragment>
    <main>
      {children}
    </main>
    <style jsx>{`
      main {
        margin: 0 auto;
        max-width: 1200px;
        padding: 32px 32px 32px 432px;
      }
      @media (max-width: 1025px) {
        main {
          padding: 32px 64px 32px;
        }
      }
      @media (max-width: 769px) {
        main {
          padding: 16px 32px 16px;
        }
      }
    `}
    </style>
  </Fragment>
)
