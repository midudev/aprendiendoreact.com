import { Fragment } from 'react'
import { PageLayout } from '../components/PageLayout'
import { ShareArticle } from '../components/ShareArticle'
import { ArticleParagraph } from '../components/ui/ArticleParagraph'

import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => {
  const { data } = post
  const { description, title, url } = data

  return (
    <Fragment>
      <PageLayout title={title} description={description}>
        <h1>{title}</h1>
        <article>
          <Content {...post}
            renderers={{
              p: ArticleParagraph
            }}
          />
        </article>
        <ShareArticle title={title} url={url} />
      </PageLayout>
      <style jsx>{`
        article {
          border-bottom: 1px solid #eee;
          margin-bottom: 16px;
          padding-bottom: 16px;
        }
        h1 {
          flex: 1 1 100%;
          font-size: 32px;
          font-weight: 400;
          padding-right: 16px;
        }
      `}</style>
    </Fragment>
  )
})
