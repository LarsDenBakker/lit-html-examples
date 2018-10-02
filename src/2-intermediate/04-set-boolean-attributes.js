import { LitElement, html } from '@polymer/lit-element';

class SetBooleanAttributes extends LitElement {

  static get properties() {
    return {
      disabled: { type: Boolean },
    }
  }

  constructor() {
    super();

    this.disabled = true;
  }

  render() {
    return html`
      <!--
        In HTML, boolean attributes can only be set to true imperatively. The presence of the attribute
        always implies true. So <button disabled="false"></button> will still set disabled to true.

        To bind a js boolean property to a html attribute, prefix the disabled attribute with a ?
      -->
      <button ?disabled="${this.disabled}">
        Submit button
      </button>

      <button @click="${() => this.disabled = !this.disabled}">
        Toggle disabled
      </button>
    `;
  }

}

customElements.define('x-set-boolean-attributes', SetBooleanAttributes);