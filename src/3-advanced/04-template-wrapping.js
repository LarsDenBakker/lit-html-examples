import { LitElement, html } from '@polymer/lit-element';

// Because templates are just variables, you can pass them around in functions.
// Based on certain conditions, you can wrap a template.

// A common use case is when rendering a list of menu options where some of the
// options are links while others are buttons. The base template might be the same,
// but they need to be wrapped in other semantic elements.
function wrapItemTemplate(item, template) {
  switch (item.type) {
    case 'button':
      return html`<button>${template}</button>`;
    case 'link':
      return html`<a href="${item.url}">${template}</a>`;
    default:
      return template;
  }
}

// Create the custom template for each item
function getItemTemplate(item) {
  // Create a base template, the same for each item
  const baseTemplate = html`<div>${item.message}</div>`;

  // Call and return the value of the wrapper factory functions
  return wrapItemTemplate(item, baseTemplate);
}

class TemplateWrapping extends LitElement {

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();

    this.items = [
      { type: 'button', message: 'hello' },
      { type: 'link', url: '#', message: 'world' },
      { type: 'none', message: 'foo' },
    ];
  }

  render() {
    return html`
      <!-- Map each items to it's own template -->
      ${this.items.map(getItemTemplate)}
    `;
  }

}

customElements.define('x-template-wrapping', TemplateWrapping);