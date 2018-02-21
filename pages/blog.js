import { Fragment } from 'react'
import { PageLayout } from '../components/PageLayout'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts( ({ posts }) => {
  return (
    <PageLayout>
      Estamos trabajando en esta sección, vuelve pronto! 😊
    </PageLayout>
  )
})
