import { Fragment } from 'react'
import { PageLayout } from '../components/PageLayout'
import { ShareArticle } from '../components/ShareArticle'
import { ArticleCaption } from '../components/ui/ArticleCaption'
import { ArticleImage } from '../components/ui/ArticleImage'
import { ArticleParagraph } from '../components/ui/ArticleParagraph'

import withPost, { Content } from 'nextein/post'

export default withPost(({ post }) => {
  const { data } = post
  const { description, title, url } = data

  return (
    <Fragment>
      <PageLayout title={title} description={description} url={url}>
        <h1>{title}</h1>
        <article>
          <Content {...post}
            renderers={{
              'x-caption': ArticleCaption,
              img: ArticleImage,
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
          color: #333;
          flex: 1 1 100%;
          font-size: 32px;
          font-weight: 600;
          padding-right: 16px;
        }
      `}</style>
    </Fragment>
  )
})
