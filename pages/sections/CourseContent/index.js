import { Fragment } from 'react'

import { CardContent } from '../../../components/ui/CardContent'

export const CourseContent = () => (
  <Fragment>
    <h2>Contenido del curso</h2>
    <section>
      <CardContent
        title='Instalación del entorno (Node y NVM)'
        image='instalacion-entorno'
      />
      <CardContent
        title='Conceptos básicos (JSX, Component, Props y State)'
        image='conceptos-basicos'
      />
      <CardContent
        title='Renderizado condicional y listas'
        image='renderizado-condicional-y-listas'
      />
      <CardContent
        title='Eventos y Formularios'
        image='eventos-y-formularios'
      />
      <CardContent
      title='Children y Proptypes'
      image='children-y-proptypes'
    />
      <CardContent
        title='Ciclo de vida de los componentes'
        image='ciclo-de-vida'
      />
      <CardContent
        title='Buenas prácticas'
        image='buenas-practicas'
      />
      <CardContent
        title='Proyecto práctico'
        image='proyecto-practico'
      />
    </section>
    <style jsx>{`
      h2 {
        color: #333;
        margin-bottom: 16px;
        display: block;
        font-weight: 500;
        font-size: 32px;
        text-align: center;
      }
      section {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
      }
    `}
    </style>
  </Fragment>
)
