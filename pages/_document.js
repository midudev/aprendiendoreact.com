import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html>
        <Head>
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <script async src='https://platform.twitter.com/widgets.js' charSet='utf-8' />
          <script async src='https://www.googletagmanager.com/gtag/js?id=UA-30525085-7' />
          <script src='/static/js/h.js' />
          <script dangerouslySetInnerHTML={{__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-30525085-7');
            `}} />
        </Head>
        <body>
          <Main />
        </body>
      </html>
    )
  }
}
