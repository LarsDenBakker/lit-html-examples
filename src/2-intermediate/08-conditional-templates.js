import { LitElement, html } from '@polymer/lit-element';

// You can return anything that should be returned from a function dynamically
// based on a property. lit-html will handle the changes efficiently
function getVariantTemplate(variant) {
  if (variant === 'a') {
    return 'Variant A';
  }

  if (variant === 'b') {
    return html`<button>Variant B</button>`;
  }

  if (variant === 'c') {
    return html`<a href="#">Variant C</a>`;
  }
}

class ConditionalTemplates extends LitElement {

  static get properties() {
    return {
      variant: { type: String },
    };
  }

  render() {
    return html`
      <div>
        <select @change="${(e) => this.variant = e.target.value}">
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>

        <!--
          You can call functions from templates. By passing around the current value from the properties
          you make sure you always get reflect the up to date return value from the function.
        -->
        ${getVariantTemplate(this.variant)}
      </div>
    `;
  }

}

customElements.define('x-conditional-templates', ConditionalTemplates);