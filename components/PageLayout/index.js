import { Fragment } from 'react'
import Head from 'next/head'

import { Header } from '../Header'
import { FixedAside } from '../FixedAside';
import { ScrollableContent } from './ScrollableContent';

export const PageLayout = ({ children, title = '', withHeader }) => (
  <Fragment>
    <Head>
      <title>{title}</title>
    </Head>
    <FixedAside />
    <ScrollableContent>
      {children}
    </ScrollableContent>
    <style jsx global>{`
    body {
      -webkit-font-smoothing: antialiased;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      margin: 0;
      padding: 0;
    }
    html {
      box-sizing: border-box;
    }
    *, *:before, *:after {
      box-sizing: inherit;
    }
    a {
      text-decoration: none;
    }
    h1, h2, h3, h4 {
      margin: 0
    }
    `}
    </style>
  </Fragment>
)
