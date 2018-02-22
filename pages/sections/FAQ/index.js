import { Fragment } from 'react'

export const FAQSection = () => (
  <Fragment>
    <div>
      <h2>FAQ: Preguntas frecuentes 🤔</h2>
      <dl>
        <dt>¿Cuando empieza el curso?</dt>
        <dd>El curso es online, por lo que puedes apuntarte siempre que quieras. Además, una vez te apuntes, podrás acceder a él tantas veces como quieras.</dd>

        <dt>¿En qué formato se encuentra el curso?</dt>
        <dd>La mayoría del tiempo el curso está grabado en forma de screencast, grabando la pantalla y explicando los ejercicios y conceptos que vamos trabajando. También hay presentaciones en persona y slides.</dd>

        <dt>¿En qué idioma está el curso?</dt>
        <dd>El curso está grabado completamente al castellano y ofrece subtítulos también en castellano.</dd>

        <dt>¿Recibiré un certificado al terminar el curso?</dt>
        <dd>¡Sí! Una vez termines el curso al 100%, podrás pedir una certificación oficial conforme has terminado el curso.</dd>

        <dt>¿Ofrecéis algún tipo de cursos presenciales o consultoría además del curso?</dt>
        <dd>¡Sí! Ponte en contacto en nosotros en <a href='mailto:miduga@gmail.com'>miduga@gmail.com</a> y cuéntanos tus necesidades.</dd>

        <dt></dt>
        <dd></dd>
      </dl>
    </div>
    <style jsx>{`
    div {
      background: #f0f0f0;
      border: 1px solid #e0e0e0;
      border-radius: 2px;
      margin-top: 32px;
      padding: 16px;
    }
    h2 {
      color: #777;
      display: block;
      text-align: center;
    }
    dt {
      color: #111;
      font-size: 18px;
      font-weight: 600;
    }
    dd {
      color: #333;
      margin-left: 0;
      margin-top: 4px;
      margin-bottom: 32px;
    }
    `}</style>
  </Fragment>
)
