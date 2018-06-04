---
title: Cómo inicializar el state de un componente usando Class Properties
description: Además de inicializar el state en el constructor, existe otra forma de inicializar el state de tu componente de forma fácil y rápida
category: post
---

Además de inicializar el state en el constructor, existe otra forma de inicializar el state de tu componente de forma fácil y rápida. Antes de entrar en detalle, veamos el ejemplo de cómo lo haríamos normalmente en el constructor, para un componente que necesita guardar en el estado un contador.

```js
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {contador: 0};
  }

  render() {
    return (
      <div>
        <h2>El contador está a {this.state.contador}.</h2>
      </div>
    );
  }
}
```

Como vemos, estaríamos usando el constructor para inicializarlo. Ahora bien, existe una [proposición llamada "Class Fields" del comité TC39 para Javascript](https://github.com/tc39/proposal-class-fields) que ya se encuentra, a la hora de escribir este artículo, en la fase 3. Esto es, que está muy cerca de ser una realidad y ser añadida al lenguaje Javascript por defecto en las próximas actualizaciones de los navegadores.

Esta proposición permite inicializar propiedades de la clase como si fuesen campos. De forma que para inicializar la propiedad `this.state` no tendríamos que hacerlo en el constructor, si no que podríamos hacerlo directamente en la clase. Veamoslo en código:

```js
class Contador extends Component {
  state = {contador: 0};

  render() {
    return (
      <div>
        <h2>El contador está a {this.state.contador}.</h2>
      </div>
    );
  }
}
```

Como véis, ahora no tenemos constructor y lo que hemos hecho es que la propiedad `state` de la clase recibe el objeto `{contador: 0}`. Y de esta forma dejamos el componente más limpio si cabe. De esta forma, si estabáis usando el constructor solo para añadir el state, ya podéis evitarlo. Para poder usar sin problemas esto tened en cuenta que seguramente [necesitaréis usar Babel para transformar vuestro código](https://babeljs.io/docs/plugins/transform-class-properties/) ya que todavía no es compatible con todos los navegadores. Si estás usando `create-react-app` para tu aplicación, estás de enhorabuena, ya que está transformación la soporta por defecto.
