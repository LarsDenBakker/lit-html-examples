// LitElement and html are the basic required imports
import { LitElement, html } from '@polymer/lit-element';

// Create a class definition for your component and extend the LitElement base class
class HelloWorld extends LitElement {

  // The render callback renders your element's template. This should be a pure function,
  // it should always return the same template given the same properties. It should not perform
  // any side effects such as setting properties or manipulating the DOM. See the updated
  // or first-updated examples if you need side effects.
  render() {

    // Return the template using the html template tag. This will allow lit-html to
    // interpret the dynamic parts of your template.
    return html`
      <div>Hello world!</div>
    `;
  }

}

// Register your element to custom elements registry, pass it a tag name and your class definition
// The element name must always contain at least one dash
customElements.define('x-hello-world', HelloWorld);