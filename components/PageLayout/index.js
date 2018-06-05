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
      <meta property='og:image' content='http://aprendiendoreact.com/static/og.png' />
      {!!url && <meta property='og:url' content={`http://aprendiendoreact.com${url}`} />}
      {!!url && <link rel='canonical' href={`http://aprendiendoreact.com${url}`} />}
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
    pre code {
      background: transparent;
    }
    code {
      background: rgba(255,229,100,0.2);
      color: #1a1a1a;
      padding: 4px;
    }
    code[class*="language-"],
    pre[class*="language-"] {
      color: black;
      background: none;
      text-shadow: 0 1px white;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 14px;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      word-wrap: normal;
      line-height: 1.5;

      -moz-tab-size: 4;
      -o-tab-size: 4;
      tab-size: 4;

      -webkit-hyphens: none;
      -moz-hyphens: none;
      -ms-hyphens: none;
      hyphens: none;
    }

    pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
    code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
      text-shadow: none;
      background: #b3d4fc;
    }

    pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
    code[class*="language-"]::selection, code[class*="language-"] ::selection {
      text-shadow: none;
      background: #b3d4fc;
    }

    @media print {
      code[class*="language-"],
      pre[class*="language-"] {
        text-shadow: none;
      }
    }

    /* Code blocks */
    pre[class*="language-"] {
      padding: 1em;
      margin: .5em 0;
      overflow: auto;
    }

    :not(pre) > code[class*="language-"],
    pre[class*="language-"] {
      background: #f5f2f0;
    }

    /* Inline code */
    :not(pre) > code[class*="language-"] {
      padding: .1em;
      border-radius: .3em;
      white-space: normal;
    }

    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
      color: slategray;
    }

    .token.punctuation {
      color: #999;
    }

    .namespace {
      opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted {
      color: #905;
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
      color: #690;
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string {
      color: #9a6e3a;
      background: hsla(0, 0%, 100%, .5);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
      color: #07a;
    }

    .token.function,
    .token.class-name {
      color: #DD4A68;
    }

    .token.regex,
    .token.important,
    .token.variable {
      color: #e90;
    }

    .token.important,
    .token.bold {
      font-weight: bold;
    }
    .token.italic {
      font-style: italic;
    }

    .token.entity {
      cursor: help;
    }
    `}
    </style>
  </Fragment>
)
