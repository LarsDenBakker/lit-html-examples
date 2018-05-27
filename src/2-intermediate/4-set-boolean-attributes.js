import { LitElement, html } from '@polymer/lit-element';

class SetBooleanAttributes extends LitElement {

  static get properties() {
    return {
      disabled: Boolean,
    }
  }

  constructor() {
    super();

    this.disabled = true;
  }

  _render({ disabled }) {
    return html`
      <!--
        In HTML, boolean attributes can only be set to true imperatively. The presence of the attribute
        always implies true. So <button disabled="false"></button> will still set disabled to true.

        To bind a js boolean property to a html attribute, postfix the disabled attribute with a ?
      -->
      <button disabled?="${disabled}">
        Submit button
      </button>

      <button on-click="${() => this.disabled = !this.disabled}">
        Toggle disabled
      </button>
    `;
  }

}

customElements.define('x-set-boolean-attributes', SetBooleanAttributes);