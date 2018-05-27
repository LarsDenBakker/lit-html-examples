import { LitElement, html } from '@polymer/lit-element';

// A powerful feature of lit-html is that templates are just variables.
// You can create them anywhere, and you can define generic templates
// to be used by multiple components.

// This template could be defined in a separate file
const sharedTemplate = html`
  <div>Shared template content</div>
`;

class ElementA extends LitElement {

  _render() {
    return html`
      <style>
        .container {
          border: 1px solid black;
        }
      </style>

      <!-- The shared template is used by this element -->
      <div class="container">
        ${sharedTemplate}
      </div>
    `;
  }

}

customElements.define('x-element-a', ElementA);

class ElementB extends LitElement {

  _render() {
    return html`
      <style>
        .container {
          border: 1px dotted black;
        }
      </style>

      <!-- The shared template is used by this element -->
      <div class="container">
        ${sharedTemplate}
      </div>
    `;
  }

}

customElements.define('x-element-b', ElementB);



class SharedTemplate extends LitElement {

  _render() {
    return html`
      <style>
        x-element-a,
        x-element-b {
          display: block;
          margin: 8px 0;
        }
      </style>

      <x-element-a></x-element-a>
      <x-element-b></x-element-b>
    `;
  }

}

customElements.define('x-shared-template', SharedTemplate);