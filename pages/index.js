import { Fragment } from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

import { PageLayout } from '../components/PageLayout'
import { StrongStatement, StrongStatementLink } from '../components/StrongStatement'

import { MyTeacherSection } from './sections/MyTeacher'
import { FAQSection } from './sections/FAQ'
import { CourseContent } from './sections/CourseContent'

export default withPosts( ({ posts }) => {
  return (
    <Fragment>
      <PageLayout
        description='Desde cero, con ejemplos prácticos y con desarrolladores con experiencia'
        title='Aprendiendo React - Curso premium.'>
        <CourseContent />
        <StrongStatement>
          Un curso premium de React ⚛️ con todo lo que necesitas para aprender la librería de Javascript de moda.<br /><StrongStatementLink href='https://www.udemy.com/aprendiendo-react/?couponCode=APR_REACT_WEB'>Únete ahora a los más de 200 estudiantes →</StrongStatementLink>
        </StrongStatement>
        <MyTeacherSection />
        <FAQSection />
      </PageLayout>
      <style jsx>{`

      `}</style>
    </Fragment>
  )
})
