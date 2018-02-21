import { Fragment } from 'react'
import { ContentContainer } from '../ContentContainer'

export const AnnouncementCourse = () => {
  return (
    <Fragment>
      <section>
        <ContentContainer>
          <div>
            <a
              className='imageLink'
              href='https://www.udemy.com/aprendiendo-react/?couponCode=APR_REACT_WEB'>
              <img
                alt='Curso para aprender React'
                src='../../static/aprendiendo-react.jpg'
                height='215'
              />
            </a>
          </div>
          <div>
            <h1>¿Quieres aprender y dominar React?</h1>
            <p>Aprende de forma práctica, concisa y amena todo lo que necesitas saber sobre desarollo de aplicaciones web en React.</p>
            <a
              className='button'
              href='https://www.udemy.com/aprendiendo-react/?couponCode=APR_REACT_WEB'>
              ¡Quiero aprender React!
            </a>
          </div>
        </ContentContainer>
      </section>
      <style jsx>{`
        section {
          background-color: #282c34;
          padding: 18px 0;
        }
        h1 {
          color: #fff;
          font-weight: 600;
          font-size: 36px;
        }
        p {
          color: #fff;
          font-weight: 400;
          font-size: 24px;
        }
        div {
          padding: 16px;
        }
        .button {
          background-color: #61dafb;
          border-radius: 2px;
          color: #000000;
          display: inline-block;
          font-size: 16px;
          padding: 10px 25px;
          transition: background-color 0.2s ease-out;
          white-space: nowrap;
        }
        .button:hover {
          background-color: #fff;
        }
        .imageLink {
          transition: opacity .2s ease-out;
        }
        .imageLink:hover {
          opacity: .8;
        }
      `}
      </style>
    </Fragment>
  )
}
