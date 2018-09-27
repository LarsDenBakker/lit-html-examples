import { LitElement, html } from '@polymer/lit-element';

// A powerful feature of lit-html is that templates are just variables.
// You can create them anywhere, and you can define generic templates
// to be used by multiple components.

// This template could be defined in a separate file
const sharedTemplate = html`
  <div>Shared template content</div>
`;

class SharedTemplateA extends LitElement {

  render() {
    return html`
      <style>
        .container {
          border: 2px solid black;
        }
      </style>

      <!-- The shared template is used by this element -->
      <div class="container">
        Element A
        ${sharedTemplate}
      </div>
    `;
  }

}

customElements.define('x-shared-template-a', SharedTemplateA);

class SharedTemplateB extends LitElement {

  render() {
    return html`
      <style>
        .container {
          border: 2px dotted black;
        }
      </style>

      <!-- The shared template is used by this element -->
      <div class="container">
        Element B
        ${sharedTemplate}
      </div>
    `;
  }

}

customElements.define('x-shared-template-b', SharedTemplateB);



class SharedTemplate extends LitElement {

  render() {
    return html`
      <style>
        x-shared-template-a,
        x-element-b {
          display: block;
          margin: 8px 0;
        }
      </style>

      <x-shared-template-a></x-shared-template-a>
      <x-shared-template-b></x-shared-template-b>
    `;
  }

}

customElements.define('x-shared-template', SharedTemplate);