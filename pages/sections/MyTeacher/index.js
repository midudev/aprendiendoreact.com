import { Fragment } from 'react'

export const MyTeacherSection = () => (
  <Fragment>
    <section>
      <h2>¿Quién será mi profesor?</h2>
      <div>
        <img src='../static/profesor.png' />
        <p>Miguel Ángel Durán es desarrollador web con más de diez años de experiencia. Actualmente trabaja como Enabler Frontend en Schibsted Spain, donde su misión es la de dar soporte a los desarrolladores de la empresa, buscar la mejor arquitectura para que todos los portales convergan e instruirles en nuevas tecnologías y soluciones web.</p>
        <a href='https://twitter.com/midudev?ref_src=twsrc%5Etfw' className='twitter-follow-button' data-size='large' data-lang='es' data-show-count='false'>Follow @midudev</a>
      </div>
    </section>
    <style jsx>{`
    h2 {
      border-right: 3px solid #0789e7;
      color: #0789e7;
      display: inline-block;
      font-weight: 500;
      font-size: 32px;
      padding: 4px 16px 4px 0;
      margin-right: 16px;
    }
    img {
      float: left;
      margin-right: 16px;
      margin-top: 16px;
      width: 96px;
    }
    section {
      display: flex;
    }
    `}</style>
  </Fragment>
)
