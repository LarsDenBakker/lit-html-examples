import { LitElement, html } from '@polymer/lit-element';

// Templates can be defined anywhere in js. It's cleaner to keep constant values outside of the class definition
const nestedTemplate = html`<div>A static nested template.</div>`;

class NestingTemplates extends LitElement {

  _render() {
    return html`
      <span>
        <!--
          You can nest templates inside each other. To prevent XSS, nested values
          must always be plain strings or templates produced with html tag literal
        -->
        ${nestedTemplate}
      </span>
    `;
  }

}

customElements.define('x-nesting-templates', NestingTemplates);