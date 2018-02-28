import { Fragment } from 'react'
import Head from 'next/head'

import { FixedAside } from '../FixedAside'
import { ScrollableContent } from './ScrollableContent'

export const PageLayout = ({ children, description = '', isArticle, title = '', url }) => (
  <Fragment>
    <Head>
      <title>{`${title} - aprendiendoReact.com`}</title>
      <meta name='description' content={description} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/static/og.png' />
      {!!url && <meta property='og:url' content={`http//aprendiendoreact.com${url}`} />}
      {!!url && <link rel='canonical' href={`http//aprendiendoreact.com${url}`} />}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='midudev' />
      <meta name='twitter:creator' content='midudev' />
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
