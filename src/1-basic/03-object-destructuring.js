import { LitElement, html } from '@polymer/lit-element';

class ObjectDestructuring extends LitElement {

  static get properties() {
    return {
      message: String,
    };
  }

  // A common pattern is to destructure the properties parameter in the _render method. This deconstructs the properties
  // object into the individual properties, so that they can be referenced more conveniently as individual variables.
  //
  // For example:
  //
  // const myObject = { a: 1, b: 2 }; // Create an object.
  // const { a, b } = myObject; // Destructure it's properties a and b.
  // console.log(a + b); // You can use a and b directly. Logs 3.
  //
  // function foo({ a, b }) {
  //   // Destructuring can also be used on method parameters, a and b can be used directly
  //   console.log(a + b);
  // }
  //
  // foo(myObject); // Logs 3.
  //
  // See: https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operatoren/Destructuring_assignment for more info.
  _render({ message }) {
    return html`
      <div>
        The message is: ${message}
      </div>
    `;
  }

}

customElements.define('x-object-destructuring', ObjectDestructuring);