---
title: React 16.3: Nueva API para Context
description: Descubre la nueva API de Context para la versión 16.3 de React
category: post
---

Se acerca una de las versiones más interesantes y prometedoras de React en los últimos tiempos. Mientras que la versión anterior de React nos trajo mejoras importantes de performance, tanto en servidor como en cliente, y el nuevo módulo `<Fragment>`, esta nueva versión promete sentar las bases de una pequeña gran revolución en la API de la librería y una de ellas las trae por la revolución en `Context`.

## Nueva API para Context
Por fin. [Después de años dándole vueltas a Context](https://reactjs.org/docs/context.html#why-not-to-use-context), parece ser que finalmente esta funcionalidad se actualizará para quedarse finalmente como una opción más en React. Y lo hará con **una API completamente nueva y renovada**, que básicamente sigue el patrón de Componentes de Orden Superior.

Para utilizar esta nueva API, lo primero que tenemos que hacer es importar el método  `createContext` de la librería React. A este método le pasaremos el valor que queremos que añada como contexto de nuestra aplicación.

![createContext React 16.3](/static/posts/react-16-3-nueva-api-context.png)
<caption>En este código invocamos la factoría createContext, pasándole un objeto como parámetro. Nos devolverá un objeto con dos componentes: Provider y Consumer.</caption>

## Cambiando los valores y consumiendo el contexto

El método `createContext` nos devolverá un objeto con dos propiedades: `Provider` y `Consumer`. Como os podéis imaginar por los nombres, el primero nos permitirá envolver otros componentes para que usen el contexto que hemos creado y el segundo nos permitirá consumirlo. Veamos un ejemplo.

![createContext React 16.3](/static/posts/react-16-3-nueva-api-context-2.png)
<caption>Necesitamos envolver con el `Provider` los componentes en los que queramos acceder al `Context` que hemos creado. Además, podemos cambiar el valor del contexto pasándole la prop value con el nuevo contexto. Esta prop no es obligatoria, es solo por si queréis actualizar el `Context`.</caption>

Una vez hemos envuelto los componentes que quieran que tengan acceso ya podremos utilizar este nuevo contexto en ellos y, para ello, debemos "consumirlo". Sí, ya os estáis imaginando que no es casualidad el uso de esa palabra. Es para que os suene que ya tenemos un `Consumer` con el que lo conseguiremos exactamente eso. Imaginad que ahora queremos acceder a este nuevo contexto en el componente Topbar, utilizando el patrón de Render Props.

![createContext React 16.3](/static/posts/react-16-3-nueva-api-context-3.png)
<caption>Sé que no deberíamos estar usando el contexto como i18n de esta forma, pero es para que os hagáis a la idea. :)</caption>

Tened en cuenta que si no usáis el `Provider` en vuestros componentes y usáis directamente el `Consumer`, lo que haréis es consumir el contexto que habéis creado directamente con el método createContext. Muchas veces, ya que no querremos modificar los valores con el provider, ya tendremos suficiente con sólo usar el `Consumer` donde lo necesitemos.

Cómo podéis ver, ya no es necesario especificar las `contextTypes` para usar el context en vuestros componentes. Por otro lado, y como recomendación, yo lo que haría es que tu consumer fuese un **Componente de Orden Superior **que pasase como propiedad a tu componente el context que necesitas, de forma que repitáis lo mínimo posible este patrón en todos vuestros componentes.