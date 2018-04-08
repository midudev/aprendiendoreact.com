import { Fragment } from 'react'
import { PageLayout } from '../components/PageLayout'

import withPosts, { sortByDate } from 'nextein/posts'
import { Timeago } from '../components/ui/Timeago'
import { UnderlinedLink } from '../components/ui/UnderlinedLink'

export default withPosts(({ posts }) => {
  posts.sort(sortByDate)
  return (
    <Fragment>
      <PageLayout
        description='Encuentra los mejores artículos para aprender React, además de recursos y promociones.'
        title='Artículos para aprender React ⚛'
      >
        <h2>Artículos sobre React ⚛️</h2>
        {
          posts.map(({ data: { date, description, url, title } }, index) => (
            <article itemScope itemType='http://schema.org/BlogPosting' key={`post-${index}`}>
              <header>
                <h1 itemProp='headline'>
                  <UnderlinedLink displayBlock href={url} itemProp='url' rel='bookmark'>
                    {title}
                  </UnderlinedLink>
                </h1>
                <time dateTime={date} itemProp='datePublished'>
                  {Timeago({ date: date })}
                </time>
              </header>
              <p>{description}</p>
            </article>
          ))
        }
      </PageLayout>
      <style jsx>{`
        article {
          margin-bottom: 32px;
          padding-bottom: 32px;
          position: relative;
        }
        article::after {
          bottom: 0;
          color: #aaa;
          content: '~';
          display: block;
          font-size: 24px;
          font-weight: 200;
          text-align: center;
          position: absolute;
          width: 100%;
        }
        header {
          align-items: center;
          display: flex;
        }
        h1 {
          flex: 1 1 100%;
          font-size: 32px;
          font-weight: 400;
          padding-right: 16px;
        }
        h2 {
          color: #444;
          font-size: 28px;
          padding-bottom: 36px;
          text-align: center;
        }
        p {
          color: #222;
          line-height: 175%;
          font-size: 16px;
        }
        time {
          color: #aaa;
          flex: 1 1 auto;
          font-weight: 200;
          letter-spacing: -1px;
          min-width: 130px;
          text-align: right;
          text-transform: uppercase;
        }
      `}</style>
    </Fragment>
  )
})
