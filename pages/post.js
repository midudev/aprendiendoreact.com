import { Fragment } from 'react'
import { PageLayout } from '../components/PageLayout'

import withPost, { Content } from 'nextein/post'

export default withPost( ({ post }) => {
  return (
    <PageLayout>
      Estamos trabajando en esta sección, vuelve pronto! 😊
      <article>
        <Content {...post} />
      </article>
    </PageLayout>
  )
})
