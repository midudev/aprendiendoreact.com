import { Fragment } from 'react'
import { Logo } from '../Logo'
import { CTA } from './CTA'
import { BlogLink } from './BlogLink'

export const FixedAside = ({ children }) => (
  <Fragment>
    <aside>
      <div>
        <Logo size={175} />
      </div>
      <h1>Aprendiendo <span>React</span></h1>
      <p>· Más de 4 horas de vídeo &nbsp;🎥<br />· Más de 70 recursos &nbsp;💻<br />· Más de 200 alumnos &nbsp;👩‍💻<br />· Acceso de por vida &nbsp;📆<br />Valoración ⭐️️️️️️⭐️⭐️⭐️⭐️(4,8)</p>
      <CTA />
      <BlogLink />
    </aside>
    <style jsx>{`
    div {
      height: 155px;
      margin-top: -25px;
    }
    h1 {
      color: #fff;
      font-size: 42px;
      letter-spacing: -2px;
      line-height: 165%;
      text-shadow: 0 0 10px rgba(0, 0, 0, .85)
    }
    h1 span {
      display: block;
      letter-spacing: -5px;
      font-size: 110px;
    }
    p {
      color: #fff;
      letter-spacing: -.5px;
      line-height: 150%;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.8;
      margin-top: 32px;
      padding: 8px;
      text-shadow: 0 0 3px rgba(0, 0, 0, .5)
    }
    aside {
      background-image: url("../../static/backgrounds/blue.png");
      background-repeat: repeat;
      display: block;
      left: 0;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      padding: 2%;
      position: fixed;
      text-align: center;
      top: 0;
      width: 400px;
    }
    @media (max-width: 1025px) {
      aside {
        padding-bottom: 72px;
        position: relative;
        width: 100%;
      }
    }
    `}</style>
  </Fragment>
)
