import { LitElement, html } from '@polymer/lit-element';

// A helper input element
class CustomInput extends LitElement {

  static get properties() {
    return {
      helpText: { type: String },
      placeholder: { type: String },
    };
  }

  render() {
    return html`
      <div>
        <div>
          <input placeholder="${this.placeholder}">
        </div>
        <div>
          ${this.helpText}
        </div>
      </div>
    `;
  }

}

customElements.define('x-custom-input', CustomInput);




// The example element
class SetProperties extends LitElement {

  static get properties() {
    return {
      helpText: { type: String },
      placeholder: { type: String },
    }
  }

  constructor() {
    super();

    this.helpText = 'Please input a value';
    this.placeholder = 'Username';
  }

  render() {
    return html`
      <!--
        Lit html will set javascript properties on the element for values entered through template expressions.
        LitElement does not do automatic camelCase/kebab-case conversion like PolymerElement does, so you need
        to use the camelCase property names.

        It depends on the element you're rendering if you should use js properties or html attributes.

        See set-attributes example on how to set attributes.
      -->
      <x-custom-input
        helpText="${this.helpText}"
        placeholder="${this.placeholder}">
      </x-custom-input>
    `;
  }

}

customElements.define('x-set-properties', SetProperties);


