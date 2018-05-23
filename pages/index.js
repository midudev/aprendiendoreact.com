import { Fragment } from 'react'

import { PageLayout } from '../components/PageLayout'
import { UnderlinedLink } from '../components/ui/UnderlinedLink'
import { StrongStatement } from '../components/StrongStatement'

import { MyTeacherSection } from './sections/MyTeacher'
import { FAQSection } from './sections/FAQ'
import { CourseContent } from './sections/CourseContent'

export default () => {
  return (
    <Fragment>
      <PageLayout
        description='Aprende React desde cero, con ejemplos prácticos y con desarrolladores con experiencia. Artículos sobre las novedades del lenguaje y con tutoriales'
        title='Aprende React - aprendiendoreact.com'>
        <CourseContent />
        <StrongStatement>
          Un curso premium de React ⚛️ con todo lo que necesitas para aprender la librería de Javascript de moda.<br /><UnderlinedLink href='https://www.udemy.com/aprendiendo-react/?couponCode=APR_REACT_WEB_9'>Únete ahora a los más de 420 estudiantes →</UnderlinedLink>
        </StrongStatement>
        <MyTeacherSection />
        <FAQSection />
      </PageLayout>
      <style jsx>{`

      `}</style>
    </Fragment>
  )
}
