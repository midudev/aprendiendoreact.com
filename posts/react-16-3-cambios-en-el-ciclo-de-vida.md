---
title: React 16.3 Cambios en el ciclo de vida. Nuevos métodos getDerivedStateFromProps y getSnapshotBeforeUpdate
description: getDerivedStateFromProps y getSnapshotBeforeUpdate. El mítico ciclo de vida de los componentes de React trae novedades importantes en esta nueva versión de React. ¡Descúbrelas!
category: post
---

![getSnapshotBeforeUpdate](/static/posts/getSnapshotBeforeUpdate.png)

El ciclo de vida de los componentes en React ha sido bastante estable a lo largo del desarrollo de React y no ha recibido entre versiones grandes cambios, exceptuando la adición del `componentDidCatch`. Sin ninguna duda, los métodos `componentDidMount` y compañía se han convertido, por méritos propios, en una de las señas de identidad de los componentes de React.

**Pero esto ha cambiado en la última versión de React 16.3. **Además de los cambios que se han añadido al contexto y las referencias, también se han deprecado dos métodos del ciclo de vida: `componentWillReceiveProps` y `componentWillUpdate`. Y, a su vez, se han añadido dos nuevos métodos que pasan a ser parte del ciclo de vida: `getDerivedStateFromProps` y `getSnapshotBeforeUpdate`.

Antes de explicar en detalle estos nuevos métodos, vamos a desgranar el por qué se ha decidido hacer este paso. Hay varias razones:

- La primera, los métodos del ciclo de vida han dado todo lo posible para lo que fueron diseñados, pero con las nuevas características que se van a implementar en React, sobretodo el render asíncrono, estos componentes dejan de tener tanto sentido y, de hecho, pueden suponer un problema. Al tener el renderizado asíncrono y que React decida qué parte del árbol tiene más sentido renderizar que otro en cuanto a prioridad, esto puede provocar que haya componentes que reciban nuevas props y, pese a ello, no ejecuten los métodos `componentWillReceiveProps` y `componentWillUpdate` ya que para React estos no son prioritarios.

- Además, **estos dos métodos normalmente no se usaban correctamente. ** Desde el equipo de React consideran que la comunidad no los ha entendido correctamente y ese problema, creen, es más un problema de implementación de la librería que de documentación. Así que esperan que estos dos métodos ayuden a los desarrolladores a usarlas como es debido.

`static getDerivedStateFromProps(nextProps, prevState)`: Este es el método que viene a sustituir a `componentWillReceiveProps`. Para empezar, notad que este método es static y así lo deberéis indicar en vuestro componente de React. Este nuevo método será invocado después que el componente sea instanciado y también cada vez que el componente reciba nuevas props. Utilizan sus parámetros con las nuevas props y el state anterior, debe devolver un objeto con el state actualizado o `null` para indicar que no requiere ninguna actualización su state. De la misma forma que pasaba con `componentWillReceiveProps`, si un componente padre causa un re-render de tu componente, este método se llamará incluso si las props no han cambiado.

`getSnapshotBeforeUpdate()`: Este es el método que viene a sustituir a `componentWillUpdate`. Es invocado justo antes de que los cambios del componentente se vean reflejados en tu salida (por ejemplo, en el DOM). Esto te permite capturar los valores actuales de tu DOM antes de que los nuevos cambios hagan cambiar estos valores. Por ejemplo, podríamos recuperar la altura de nuestra caja antes de mostrar los nuevos elementos o la posición del scroll. Lo que devuelve este método se pasa como tercer parámetro al método `componentDidUpdate`.

Por cierto, que para los que estéis usando actualmente estos métodos no os tenéis que preocupar o asustar. Desde el equipo de React saben que existen muchísimas librerías que todavía utilizan estos métodos por lo que estarán disponibles hasta React 17. En React 18 estarán disponibles todavía pero con un prefix `UNSAFE_` delante. Para cambiar automáticamente sus referencias en tu código e ir preparándote al cambio, [puedes utilizar un codemod en tu código](https://github.com/reactjs/react-codemod#rename-unsafe-lifecycles). **Pensad que en Facebook tienen más de 50.000 componentes y van a tardar bastante en migrar sus propios componentes a estos nuevos métodos**, así que esto también es un alivio para ellos... y para nosotros.
