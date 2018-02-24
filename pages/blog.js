import { Fragment } from 'react'
import { PageLayout } from '../components/PageLayout'

import withPosts from 'nextein/posts'
import { Timeago } from '../components/ui/Timeago'
import { UnderlinedLink } from '../components/ui/UnderlinedLink'

export default withPosts(({ posts }) => {
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
              <h1 itemProp='headline'>
                <UnderlinedLink displayBlock href={url} itemProp='url' rel='bookmark'>
                  {title}
                </UnderlinedLink>
              </h1>
              <p>{description}</p>
              <time dateTime={date} itemProp='datePublished'>
                {Timeago({ date: date })}
              </time>
            </article>
          ))
        }
      </PageLayout>
      <style jsx>{`
        article {
          margin-bottom: 32px;
          padding-bottom: 16px;
          position: relative;
        }
        article::after {
          background-color: #eee;
          bottom: 0;
          content: '';
          left: 0;
          height: 1px;
          margin: auto;
          position: absolute;
          right: 0;
          width: 250px;
        }
        h1 {
          font-size: 32px;
          font-weight: 400;
          padding-right: 140px;
        }
        h2 {
          color: #444;
          font-size: 28px;
          padding-bottom: 36px;
          text-align: center;
        }
        time {
          color: #666;
          font-weight: 500;
          letter-spacing: -1px;
          position: absolute;
          right: 0;
          text-transform: uppercase;
          top: 6px;
        }
      `}</style>
    </Fragment>
  )
})
