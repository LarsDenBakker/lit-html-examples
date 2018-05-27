import { LitElement, html } from '@polymer/lit-element';

// A helper input element
class CustomInput extends LitElement {

  static get properties() {
    return {
      helpText: String,
      placeholder: String,
    };
  }

  _render({ helpText, placeholder }) {
    return html`
      <div>
        <div>
          <input placeholder$="${placeholder}">
        </div>
        <div>
          ${helpText}
        </div>
      </div>
    `;
  }

}

customElements.define('x-custom-input', CustomInput)




// The example element
class SetProperties extends LitElement {

  static get properties() {
    return {
      helpText: String,
      placeholder: String,
    }
  }

  constructor() {
    super();

    this.helpText = 'Please input a value';
    this.placeholder = 'Username';
  }

  _render({ helpText, placeholder }) {
    return html`
      <!--
        Lit html will set javascript properties on the element for values entered through template expressions.
        LitElement does not do automatic camelCase/kebab-case conversion like PolymerElement does, so you need
        to use the camelCase property names.

        It depends on the element you're rendering if you should use js properties or html attributes.

        See set-attributes example on how to set attributes.
      -->
      <x-custom-input
        helpText="${helpText}"
        placeholder="${placeholder}">
      </x-custom-input>
    `;
  }

}

customElements.define('x-set-properties', SetProperties);


